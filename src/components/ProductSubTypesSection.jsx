
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

import {
  Package,
  Search,
  Plus,
  Minus,
  MessageSquare,
  X,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

const CUSTOMER_STORAGE_KEY = 'vishwas_customer_details';

export default function ProductSubTypesSection({ onOpenInquiry }) {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    productTitle = 'Brand Product Sub-Types',
    subTypes: initialSubTypes = [],
    brandTag = 'Authorized Brand',
  } = location.state || {};

  const [subTypes, setSubTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sendingSubId, setSendingSubId] = useState(null);

  // Toast Notification State
  const [toast, setToast] = useState(null);

  // Automatically hide toast after 3.5 seconds
  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast(null);
    }, 3500);

    return () => clearTimeout(timer);
  }, [toast]);

  // Load previously saved customer details
  const [customerDetails, setCustomerDetails] = useState(() => {
    try {
      const savedDetails = localStorage.getItem(CUSTOMER_STORAGE_KEY);
      return savedDetails ? JSON.parse(savedDetails) : null;
    } catch (error) {
      console.error('Unable to load customer details:', error);
      return null;
    }
  });

  // Customer form visibility
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);

  // Product selected for enquiry
  const [pendingInquirySub, setPendingInquirySub] = useState(null);

  // Customer form state
  const [customerForm, setCustomerForm] = useState({
    name: '',
    phone: '',
    email: '',
  });

  // Initialize Product Subtypes
  useEffect(() => {
    setSubTypes(
      initialSubTypes.map((item, index) => ({
        ...item,
        id: item.id || `SUB-${index + 1}`,
        quantity: Math.max(1, Number(item.quantity) || 1),
      }))
    );
  }, [initialSubTypes]);

  // Customer form input change
  const handleCustomerChange = (event) => {
    const { name, value } = event.target;

    setCustomerForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // EmailJS Product Inquiry
  const sendEmailInquiry = async (sub, details) => {
    if (sendingSubId !== null) return;

    setSendingSubId(sub.id);

    try {
      const templateParams = {
        // Customer Details
        customer_name: details.name,
        customer_phone: details.phone,
        customer_email: details.email,

        // Product Details
        brand_name: brandTag,
        product_name: sub.name,
        category: sub.categoryType || 'N/A',
        quantity: sub.quantity,
        applications: (sub.applications || []).join(', ') || 'N/A',
      };

      // Send Email
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_PRODUCT_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      console.log('Product inquiry email sent:', response);

      // Success Notification
      setToast({
        type: 'success',
        message:
          'Your product enquiry has been sent successfully! Our team will contact you soon.',
      });

    } catch (error) {
      console.error('Product inquiry email failed:', error);

      // Error Notification
      setToast({
        type: 'error',
        message: 'Unable to send your enquiry. Please try again later.',
      });

    } finally {
      setSendingSubId(null);
    }
  };

  // Handle Enquire Button
  const handleEmailInquiry = async (sub) => {
    if (sendingSubId !== null) return;

    // If customer details already exist, send directly
    if (customerDetails) {
      await sendEmailInquiry(sub, customerDetails);
      return;
    }

    // Otherwise, open customer details popup
    setPendingInquirySub(sub);
    setIsCustomerModalOpen(true);
  };

  // Save Customer Details and Send Pending Enquiry
  const handleCustomerSubmit = async (event) => {
    event.preventDefault();

    const details = {
      name: customerForm.name.trim(),
      phone: customerForm.phone.trim(),
      email: customerForm.email.trim(),
    };

    if (!details.name || !details.phone || !details.email) {
      setToast({
        type: 'error',
        message: 'Please fill in all customer details.',
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(details.email)) {
      setToast({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    try {
      localStorage.setItem(
        CUSTOMER_STORAGE_KEY,
        JSON.stringify(details)
      );

      setCustomerDetails(details);
      setIsCustomerModalOpen(false);

      // Send enquiry for selected product
      const selectedProduct = pendingInquirySub;

      setPendingInquirySub(null);

      if (selectedProduct) {
        await sendEmailInquiry(selectedProduct, details);
      }

    } catch (error) {
      console.error('Unable to save customer details:', error);

      setToast({
        type: 'error',
        message: 'Unable to save your details. Please try again.',
      });
    }
  };

  // Close Popup and Go Back
  const handleCloseCustomerModal = () => {
    setIsCustomerModalOpen(false);
    setPendingInquirySub(null);
  };

  // Quantity Change
  const handleQuantityChange = (id, delta) => {
    setSubTypes((previous) =>
      previous.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, (item.quantity || 1) + delta),
            }
          : item
      )
    );
  };

  // Search Filter
  const query = searchQuery.trim().toLowerCase();

  const filteredSubTypes = subTypes.filter((sub) => {
    const searchableText = [
      sub.name,
      sub.categoryType,
      ...(sub.applications || []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return !query || searchableText.includes(query);
  });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Toast Notification */}
      {toast && (
        <div
          role="alert"
          className={`
            fixed right-4 top-5 z-[10000]
            flex w-[calc(100%-2rem)] max-w-md items-start gap-3
            rounded-xl border bg-white p-4 shadow-xl
            animate-[slideIn_0.3s_ease-out]
            ${
              toast.type === 'success'
                ? 'border-green-200'
                : 'border-red-200'
            }
          `}
        >
          {toast.type === 'success' ? (
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-600" />
          ) : (
            <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-red-600" />
          )}

          <div className="min-w-0 flex-1">
            <p
              className={`text-sm font-bold ${
                toast.type === 'success'
                  ? 'text-green-700'
                  : 'text-red-700'
              }`}
            >
              {toast.type === 'success'
                ? 'Enquiry Sent!'
                : 'Something went wrong'}
            </p>

            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              {toast.message}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setToast(null)}
            aria-label="Close notification"
            className="shrink-0 rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Customer Details Popup Overlay */}
      {isCustomerModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">

          <form
            onSubmit={handleCustomerSubmit}
            className="relative w-full max-w-sm rounded-xl bg-white p-5 shadow-2xl"
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseCustomerModal}
              aria-label="Go back"
              className="
                absolute right-3 top-3
                flex h-8 w-8 items-center justify-center
                rounded-full
                text-slate-500
                transition
                hover:bg-red-50
                hover:text-red-600
              "
            >
              <X className="h-5 w-5" />
            </button>

            {/* Heading */}
            <h3 className="mb-1 pr-8 text-lg font-bold text-slate-900">
              Customer Details
            </h3>

            <p className="mb-4 text-xs text-slate-500">
              Enter your details to continue with your product enquiry.
            </p>

            <div className="space-y-3">

              {/* Name */}
              <input
                type="text"
                name="name"
                value={customerForm.name}
                onChange={handleCustomerChange}
                placeholder="Your Name"
                autoComplete="name"
                required
                className="
                  w-full rounded-lg border border-slate-200
                  px-3 py-2.5 text-sm outline-none
                  transition focus:border-red-500
                  focus:ring-2 focus:ring-red-100
                "
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                value={customerForm.phone}
                onChange={handleCustomerChange}
                placeholder="Phone Number"
                autoComplete="tel"
                required
                className="
                  w-full rounded-lg border border-slate-200
                  px-3 py-2.5 text-sm outline-none
                  transition focus:border-red-500
                  focus:ring-2 focus:ring-red-100
                "
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                value={customerForm.email}
                onChange={handleCustomerChange}
                placeholder="Email Address"
                autoComplete="email"
                required
                className="
                  w-full rounded-lg border border-slate-200
                  px-3 py-2.5 text-sm outline-none
                  transition focus:border-red-500
                  focus:ring-2 focus:ring-red-100
                "
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={sendingSubId !== null}
                className="
                  w-full rounded-lg bg-red-600 py-2.5
                  text-sm font-bold text-white
                  transition hover:bg-red-700
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {sendingSubId !== null ? 'Sending...' : 'Submit'}
              </button>

            </div>
          </form>
        </div>
      )}

      {/* Product Search and Listing */}
      <section className="py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

          {/* Search Box */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-full max-w-md">

              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search product or application..."
                aria-label="Search product subtypes"
                className="
                  w-full rounded-lg border border-slate-200
                  bg-slate-50 py-3 pl-9 pr-3 text-sm
                  outline-none transition
                  focus:border-red-500 focus:ring-2 focus:ring-red-100
                "
              />

            </div>
          </div>

          {/* Compact Product Cards */}
          {filteredSubTypes.length > 0 ? (

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

              {filteredSubTypes.map((sub) => (

                <article
                  key={sub.id}
                  className="
                    group flex flex-col overflow-hidden
                    rounded-xl border border-slate-200
                    bg-white shadow-sm transition
                    hover:-translate-y-1 hover:shadow-lg
                  "
                >

                  {/* Product Image */}
                  <div className="h-36 w-full overflow-hidden bg-slate-100 sm:h-40">

                    {sub.imgUrl ? (

                      <img
                        src={sub.imgUrl}
                        alt={sub.name}
                        loading="lazy"
                        className="
                          h-full w-full object-cover
                          transition-transform duration-500
                          group-hover:scale-105
                        "
                      />

                    ) : (

                      <div className="flex h-full w-full items-center justify-center">
                        <Package className="h-9 w-9 text-slate-300" />
                      </div>

                    )}

                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col p-3">

                    {/* Product Name */}
                    <h2
                      className="
                        text-sm font-bold leading-snug
                        text-slate-900 transition
                        group-hover:text-red-600 sm:text-base
                      "
                    >
                      {sub.name}
                    </h2>

                    {/* Applications */}
                    {sub.applications?.length > 0 && (

                      <div className="mt-3">

                        <p
                          className="
                            mb-1.5 text-[10px] font-bold
                            uppercase tracking-wider
                            text-slate-400 sm:text-xs
                          "
                        >
                          Applications
                        </p>

                        <div className="flex flex-wrap gap-1.5">

                          {sub.applications.map((application, index) => (

                            <span
                              key={`${sub.id}-application-${index}`}
                              className="
                                rounded-md bg-slate-100
                                px-2 py-1 text-[10px]
                                font-semibold text-slate-600 sm:text-xs
                              "
                            >
                              {application}
                            </span>

                          ))}

                        </div>

                      </div>

                    )}

                    {/* Quantity and Inquiry */}
                    <div className="mt-auto border-t border-slate-100 pt-3">

                      <div className="flex items-center gap-1.5">

                        {/* Quantity Controls */}
                        <div
                          className="
                            flex items-center rounded-lg
                            border border-slate-200
                            bg-slate-50 p-0.5
                          "
                        >

                          <button
                            type="button"
                            aria-label={`Decrease ${sub.name} quantity`}
                            onClick={() => handleQuantityChange(sub.id, -1)}
                            className="
                              flex h-7 w-7 items-center
                              justify-center rounded-md
                              border border-slate-200
                              bg-white text-slate-600
                              transition hover:bg-slate-100
                            "
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>

                          <span className="w-7 text-center text-sm font-bold text-slate-900">
                            {sub.quantity}
                          </span>

                          <button
                            type="button"
                            aria-label={`Increase ${sub.name} quantity`}
                            onClick={() => handleQuantityChange(sub.id, 1)}
                            className="
                              flex h-7 w-7 items-center
                              justify-center rounded-md
                              border border-slate-200
                              bg-white text-slate-600
                              transition hover:bg-slate-100
                            "
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>

                        </div>

                        {/* Email Inquiry Button */}
                        <button
                          type="button"
                          disabled={sendingSubId !== null}
                          onClick={() => handleEmailInquiry(sub)}
                          className="
                            flex min-w-0 flex-1 items-center
                            justify-center gap-1 rounded-lg
                            bg-slate-900 px-2 py-2
                            text-xs font-extrabold tracking-wide
                            text-white transition hover:bg-red-600
                            sm:text-sm
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                          "
                        >

                          <MessageSquare className="h-4 w-4 shrink-0" />

                          {sendingSubId === sub.id
                            ? 'Sending...'
                            : 'Enquire'}

                        </button>

                      </div>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            /* No Products Found */
            <div
              className="
                rounded-2xl border border-slate-200
                bg-white px-5 py-12 text-center
              "
            >

              <Package className="mx-auto h-10 w-10 text-slate-300" />

              <h3 className="mt-3 text-base font-extrabold text-slate-900">
                No Products Found
              </h3>

              <p className="mt-2 text-xs text-slate-500">
                {subTypes.length === 0
                  ? 'No subtype data was provided for this brand. Return to the products page and select a brand.'
                  : 'Try a different search term.'}
              </p>

              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="
                  mt-4 rounded-lg bg-slate-900
                  px-4 py-2.5 text-xs font-bold
                  text-white transition hover:bg-red-600
                "
              >
                Reset Search
              </button>

              {subTypes.length === 0 && (

                <button
                  type="button"
                  onClick={() => navigate('/products')}
                  className="
                    ml-2 mt-4 rounded-lg
                    border border-slate-200
                    px-4 py-2.5 text-xs font-bold
                    text-slate-700 transition hover:bg-slate-100
                  "
                >
                  Browse Brands
                </button>

              )}

            </div>

          )}

        </div>
      </section>

    </div>
  );
}

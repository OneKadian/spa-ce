"use client";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const stripePromise = loadStripe("");

function CustomLink({ className, display, user, locationID, modelType }) {
  const [toastDisplay, setToastDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [longLoadingToast, setLongLoadingToast] = useState(false);
  const pricingBracketRef = useRef(null);

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => {
        setLongLoadingToast(true);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [loading]);

  const handleClick = async (usir, locationID, modelType) => {
    if (!usir) {
      setToastDisplay(true);
      if (pricingBracketRef.current) {
        pricingBracketRef.current.scrollIntoView({ behavior: "auto" });
      }
      window.location.href = `/#${locationID}`; // Redirect with hash
    } else {
      setLoading(true);
      try {
        const stripe = await stripePromise;
        if (!stripe) {
          return;
        }
        const { session } = await (
          await fetch(`/api/stripe-${modelType}-session`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })
        ).json();

        await stripe.redirectToCheckout({
          sessionId: session.id,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {/* <button
        className={`${className} h-12 w-52 flex items-center justify-center`}
        onClick={() => {
          handleClick(user, locationID, modelType);
        }}
        disabled={loading}
      >
        {loading ? (
          <div className="flex h-full w-full justify-center items-center">
            <span
              className="loading loading-spinner loading-sm text-white"
              style={{ borderColor: "white" }}
            ></span>
          </div>
        ) : (
          <span>{display}</span>
        )}
      </button> */}
      <button
        className={`${className} h-12 w-52 flex items-center justify-center`}
        onClick={() => {
          handleClick(user, locationID, modelType);
        }}
        disabled={loading}
      >
        {loading ? (
          <Box
            sx={{
              display: "flex",
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress size={24} sx={{ color: "white" }} />
          </Box>
        ) : (
          <span>{display}</span>
        )}
      </button>

      {toastDisplay && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            id="toast-bottom-right"
            className="fixed flex items-center w-max p-4 space-x-4 text-gray-500 bg-gray-300 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 lg:max-w-xs"
            role="alert"
          >
            <div className="flex">
              <div className="ms-3 text-sm font-normal">
                <span className="mb-1 text-sm font-semibold text-gray-900">
                  You must be logged in
                </span>
                <div className="mb-2 mt-2 text-sm font-normal">
                  Please login before moving forward
                </div>
                <div className="grid grid-cols-1 gap-2 h-10">
                  <div></div>
                  <div>
                    <Link
                      href="/sign-in"
                      className="inline-flex justify-center items-center w-3/4 h-full px-2 py-1.5 text-xs font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 items-center justify-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8"
                data-dismiss-target="#toast-interactive"
                aria-label="Close"
                onClick={() => {
                  setToastDisplay(false);
                }}
              >
                <CloseIcon />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {longLoadingToast && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            id="toast-bottom-right"
            className="fixed flex items-center w-max p-4 space-x-4 text-gray-500 bg-gray-300 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 lg:max-w-xs"
            role="alert"
          >
            <div className="flex">
              <div className="ms-3 text-sm font-normal">
                <span className="mb-1 text-sm font-semibold text-gray-900">
                  Almost there!
                </span>
                <div className="mb-2 mt-2 text-sm font-normal">
                  Good things take time
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default CustomLink;

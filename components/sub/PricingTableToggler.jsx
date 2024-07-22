"use client";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import CustomLink from "./CustomLink";

const ToggleTable2 = ({ userd }) => {
  const [isYearly, setIsYearly] = useState(false);
  const toggleBilling = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };

  // Change the priceType and then add that as stripe-priceType-session into the api with the price id
  const prices = [
    {
      title: "Current",
      per: "/month",
      prices: [
        {
          price: "0",
          priceType: "zeroMonthly",
        },
        {
          price: "0",
          priceType: "zeroAnnual",
        },
      ],
      description:
        "Your current situation where the idea is nowhere near Launch",
      features: [
        {
          text: "Creating from scratch",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Unorganized flow of work",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Searching for resources",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Launch: Delayed",
          Icon: <CloseIcon className="text-red-600" />,
        },
        {
          text: "Targets: Missed",
          Icon: <CloseIcon className="text-red-600" />,
        },
      ],
      id: "noPlan",
      buttonDisplay: "",
      buttonText: "LAUNCH",
    },
    {
      title: "Innovator",
      per: "/month",
      prices: [
        {
          price: "25",
          // priceType: "BasicMonthly",
          priceType: "monthly",
        },
        {
          price: "240",
          // priceType: "BasicAnnual",
          priceType: "annual",
        },
      ],
      description: "Take off with us and build your SaaS venture at warp speed",
      features: [
        {
          text: "Boiler Plate with instructions",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Organized flow with roadmaps",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Resource sheet included",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Launch: Instant",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Updates: Unavailable",
          Icon: <CloseIcon className="text-red-600" />,
        },
      ],
      id: "monthly",
      buttonDisplay: "",
      buttonText: "LAUNCH",
    },
    {
      title: "Pioneer",
      per: "/month",
      prices: [
        {
          price: "50",
          // priceType: "AdvanceMonthly",
          priceType: "monthly",
        },
        {
          price: "480",
          // priceType: "AdvanceAnnual",
          priceType: "annual",
        },
      ],
      description:
        "If you're in it for the long haul, this plan is tailor-made for you.",
      features: [
        {
          text: "Boiler Plate with instructions",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Organized flow with roadmaps",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Resource sheet included",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Launch: Instant",
          Icon: <DoneIcon className="text-green-400" />,
        },
        {
          text: "Updates: Available",
          Icon: <DoneIcon className="text-green-400" />,
        },
      ],
      id: "annual",
      buttonDisplay: "",
      buttonText: "LAUNCH",
      link: "https://buy.stripe.com/test_4gw5kQ9H91Ob4GQ9AD",
    },
  ];

  return (
    <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
      <div
        className="flex flex-col justify-center items-center mx-auto max-w-screen-md mb-8 lg:mb-12"
        id="pricing-section"
      >
        {/* Other content */}
        <div
          className="mx-auto max-w-screen-md text-center mb-8 lg:mb-8"
          id="pricing-section"
        >
          <h2 className="text-3xl lg:text-4xl mb-2 font-semibold text-white sm:leading-[55px] sm:tracking-tight">
            <span>Pricing</span>
          </h2>
          <p className="mb-5 font-light text-gray-300 sm:text-xl">
            Buy once, Launch forever
          </p>
        </div>
        {/* Toggler */}
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <span class="m-3 text-sm font-medium text-white">
            Monthly Billing
          </span>
          <Switch
            className="text-white"
            checked={isYearly}
            onChange={toggleBilling}
            sx={{
              "& .MuiSwitch-track": {
                backgroundColor: "#CBD5E0", // Change track color to gray-300
              },
            }}
          />
          <span class="m-3 text-sm font-medium text-white">Annual Billing</span>
        </label>
      </div>

      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-6 lg:space-y-0">
        {prices.map((option, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-6 mx-auto max-w-lg text-center border border-white-600/30 bg-white-600/20 rounded-lg shadow text-white"
          >
            <h3 className="mb-4 text-3xl font-semibold text-gray-300">
              {option.title}
            </h3>
            <p className="font-light text-primary-900 sm:text-lg m-0">
              {option.description}
            </p>
            <div className="flex flex-col items-center justify-center min-h-[100px] space-y-4 p-6">
              <div className="flex flex-row">
                <div className="flex items-end">
                  <div className="flex text-left text-[42px] font-semibold leading-6 text-gray-300">
                    {isYearly && option.prices[0].price > 0 ? (
                      <>
                        <span className="mr-2 text-gray-300 line-through">
                          ${option.prices[0].price}
                        </span>
                        <span className="text-gray-300">
                          ${option.prices[1].price / 12}
                        </span>
                      </>
                    ) : (
                      `$${option.prices[0].price}`
                    )}
                  </div>
                  <div className="-mb-1 ml-1 text-left text-sm font-medium text-gray-300">
                    <div>/month</div>
                  </div>
                </div>
              </div>
              {option.prices[0].price > 0 ? (
                <div className="text-left text-sm text-gray-300">
                  {isYearly
                    ? `$${option.prices[1].price} will be charged when annual`
                    : "when charged monthly"}
                </div>
              ) : null}
            </div>

            <ul className="mb-8 space-y-4 text-left mx-auto">
              {option.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  {feature.Icon} {/* Use the predefined icon */}
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <CustomLink
              locationID={option.id}
              modelType={
                isYearly
                  ? option.prices[1].priceType
                  : option.prices[0].priceType
              }
              user={userd}
              display={option.buttonText}
              className={`text-white bg-purple-700 ${option.buttonDisplay} font-medium rounded-lg text-sm px-5 py-2.5 w-4/5 text-center`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleTable2;

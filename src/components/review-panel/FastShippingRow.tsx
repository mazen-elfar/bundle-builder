const TruckIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="5" fill="#EEF4FF" />
    <path
      d="M8 12H20V21H8V12Z"
      stroke="#0AA288"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M20 15H23L25 18V21H20V15Z"
      stroke="#0AA288"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="11" cy="22.5" r="1.5" stroke="#0AA288" strokeWidth="1.5" />
    <circle cx="22" cy="22.5" r="1.5" stroke="#0AA288" strokeWidth="1.5" />
  </svg>
);

const FastShippingRow = () => {
  return (
    <article
      className="
        flex
        h-[41px]
        w-full
        items-start
        justify-between
        gap-[16px]

        max-sm:w-[350px]
        max-sm:h-[36px]
        max-sm:gap-[8px]
      "
    >
      {/* Left */}
      <div
        className="
          flex
          h-[41px]
          w-[293px]
          items-start
          gap-[12px]

          max-sm:h-[36px]
          max-sm:w-auto
          max-sm:flex-1
          max-sm:gap-[8px]
        "
      >
        {/* Icon */}
        <figure
          className="
            h-[41px]
            w-[41px]
            shrink-0
            overflow-hidden
            rounded-[5px]

            max-sm:h-[36px]
            max-sm:w-[36px]
          "
        >
          <TruckIcon />
        </figure>

        {/* Content */}
        <div
          className="
            flex
            h-[41px]
            flex-1
            items-center

            max-sm:h-[36px]
          "
        >
          <h4
            className="
              font-[Gilroy]
              font-[500]
              text-[14px]
              leading-[16px]
              tracking-[0.5%]
              text-[#0B0D10]

              max-sm:text-[12px]
            "
          >
            Fast Shipping
          </h4>
        </div>
      </div>

      {/* Price */}
      <div
        className="
          flex
          h-[32px]
          w-[41px]
          shrink-0
          flex-col
          items-end
          justify-between

          max-sm:h-[36px]
          max-sm:w-[50px]
        "
      >
        <span
          className="
            whitespace-nowrap
            font-[Gilroy]
            font-[500]
            text-[14px]
            leading-[16px]
            tracking-[0.5%]
            text-[#6F7882]
            line-through

            max-sm:text-[12px]
          "
        >
          $5.99
        </span>

        <span
          className="
            whitespace-nowrap
            font-[Gilroy]
            font-[600]
            text-[14px]
            leading-[16px]
            tracking-[0.5%]
            text-[var(--color-success)]

            max-sm:text-[12px]
          "
        >
          FREE
        </span>
      </div>
    </article>
  );
};

export default FastShippingRow;

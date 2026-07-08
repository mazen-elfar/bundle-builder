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
          "
        >
          FREE
        </span>
      </div>
    </article>
  );
};

export default FastShippingRow;

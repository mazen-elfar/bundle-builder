import ShippingIcon from "../../assets/icons-According/carbon_delivery.png";

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
          <img
            src={ShippingIcon}
            alt=""
            draggable={false}
            className="h-full w-full object-contain select-none"
          />
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

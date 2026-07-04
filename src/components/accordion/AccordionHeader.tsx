const AccordionHeader = () => {
  return (
    <header>
      {/* Step Label */}
      <span>STEP 1 OF 4</span>

      {/* Main Content */}
      <div>
        {/* Left Side */}
        <div>
          {/* Icon */}
          <div>
            Icon
          </div>

          {/* Title */}
          <h2>Choose your cameras</h2>
        </div>

        {/* Right Side */}
        <div>
          <span>2 selected</span>

          {/* Chevron */}
          <div>
            ▲
          </div>
        </div>
      </div>
    </header>
  );
};

export default AccordionHeader;
export default function Index() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* About Me Button - Fixed Top Right */}
      <div className="fixed top-6 right-8 md:right-12 lg:right-16 z-50">
        <button
          onClick={scrollToAbout}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-button-bg px-4 shadow-elevated hover:shadow-elevated-hover transition-all duration-200"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0"
          >
            <path
              d="M9.99992 10C9.08325 10 8.29853 9.67365 7.64575 9.02087C6.99297 8.3681 6.66659 7.58337 6.66659 6.66671C6.66659 5.75004 6.99297 4.96532 7.64575 4.31254C8.29853 3.65976 9.08325 3.33337 9.99992 3.33337C10.9166 3.33337 11.7013 3.65976 12.3541 4.31254C13.0069 4.96532 13.3333 5.75004 13.3333 6.66671C13.3333 7.58337 13.0069 8.3681 12.3541 9.02087C11.7013 9.67365 10.9166 10 9.99992 10ZM3.33325 16.6667V14.3334C3.33325 13.8612 3.45478 13.4271 3.69784 13.0313C3.94089 12.6355 4.26381 12.3334 4.66659 12.125C5.5277 11.6945 6.4027 11.3716 7.29159 11.1563C8.18047 10.941 9.08325 10.8334 9.99992 10.8334C10.9166 10.8334 11.8194 10.941 12.7083 11.1563C13.5971 11.3716 14.4721 11.6945 15.3333 12.125C15.736 12.3334 16.0589 12.6355 16.302 13.0313C16.5451 13.4271 16.6666 13.8612 16.6666 14.3334V16.6667H3.33325ZM4.99992 15H14.9999V14.3334C14.9999 14.1806 14.9617 14.0417 14.8853 13.9167C14.8089 13.7917 14.7083 13.6945 14.5833 13.625C13.8333 13.25 13.0763 12.9688 12.3124 12.7813C11.5485 12.5938 10.7777 12.5 9.99992 12.5C9.22214 12.5 8.45131 12.5938 7.68742 12.7813C6.92353 12.9688 6.16659 13.25 5.41659 13.625C5.29159 13.6945 5.19089 13.7917 5.1145 13.9167C5.03811 14.0417 4.99992 14.1806 4.99992 14.3334V15ZM9.99992 8.33337C10.4583 8.33337 10.8506 8.17018 11.177 7.84379C11.5034 7.5174 11.6666 7.12504 11.6666 6.66671C11.6666 6.20837 11.5034 5.81601 11.177 5.48962C10.8506 5.16324 10.4583 5.00004 9.99992 5.00004C9.54158 5.00004 9.14922 5.16324 8.82284 5.48962C8.49645 5.81601 8.33325 6.20837 8.33325 6.66671C8.33325 7.12504 8.49645 7.5174 8.82284 7.84379C9.14922 8.17018 9.54158 8.33337 9.99992 8.33337Z"
              fill="#6750A4"
            />
          </svg>
          <span className="text-button-primary font-medium text-sm leading-5 tracking-[0.1px] font-roboto">
            About me
          </span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="min-h-screen flex items-center py-12 px-4 md:px-8 lg:px-16 relative z-10">
          <div className="w-full max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
              {/* Left Content */}
              <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 pr-0 lg:pr-12">
                {/* Greeting Text */}
                <div className="space-y-0">
                  <h1 className="font-sf-pro font-medium text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black tracking-tight leading-tight">
                    hi, my name is
                  </h1>
                  <h2 className="font-sf-pro font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[120px] xl:text-[160px] 2xl:text-[180px] text-ansh-blue tracking-tight leading-none">
                    ANSH
                  </h2>
                </div>

                {/* Description */}
                <div id="about" className="max-w-2xl">
                  <p className="font-sf-pro text-sm sm:text-sm md:text-base text-description leading-relaxed">
                    Ansh Tiwari, a Class 10 student under BSEB, committed to academic excellence.
                    Preparing diligently for board exams with focus and discipline.
                    Passionate about cricket and curious by nature.
                    Proud Brahman with strong roots and forward-looking ambition.
                  </p>
                </div>
              </div>

              {/* Right Image - Oversized */}
              <div className="order-1 lg:order-2 hidden lg:block absolute left-1/3 top-1/2 -translate-y-1/2 h-[130vh] lg:w-[60vw] xl:w-[65vw] 2xl:w-[70vw] max-w-none">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8a952e5f8e7f78af49765d3578f3e190f7d82d6d?width=5340"
                  alt="Ansh Tiwari"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Mobile Image */}
              <div className="order-1 lg:hidden flex justify-center mt-8">
                <div className="w-full max-w-sm">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/8a952e5f8e7f78af49765d3578f3e190f7d82d6d?width=5340"
                    alt="Ansh Tiwari"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

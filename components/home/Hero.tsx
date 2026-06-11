import {getTranslations} from "next-intl/server";

export default async function Hero() {

    const t = await getTranslations("HomePage");

  return (
    <section className="section-spacing">
      <div className="container-custom">

        {t("title")}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span
              className="
                inline-block
                bg-secondary-bg
                text-primary
                px-4
                py-2
                rounded-full
                font-medium
              "
            >
              Trusted Healthcare
            </span>

            <h1
              className="
                text-5xl
                lg:text-7xl
                font-bold
                mt-6
                leading-tight
              "
            >
              Your Trusted
              <span className="text-primary">
                {" "}Pharmacy
              </span>
              <br />
              For Better Health
            </h1>

            <p
              className="
                text-muted
                text-lg
                mt-6
                max-w-xl
                leading-8
              "
            >
              Reliable pharmacy services,
              trusted medicines, and
              professional healthcare support
              for your daily wellness.
            </p>

            <div className="flex gap-4 mt-8">

              <button
                className="
                  bg-primary
                  text-white
                  px-8
                  py-4
                  rounded-md
                  hover:bg-primary-hover
                  transition-colors
                  duration-300
                "
              >
                Explore Products
              </button>

              <button
                className="
                  border
                  border-border
                  px-8
                  py-4
                  rounded-md
                  hover:border-primary
                  transition-colors
                  duration-300
                "
              >
                Contact Us
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            <div
              className="
                bg-secondary-bg
                rounded-[40px]
                h-125
                shadow-md
                flex
                items-center
                justify-center
              "
            >
              <p className="text-muted text-lg">
                Pharmacy Image Here
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
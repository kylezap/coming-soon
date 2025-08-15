import "./App.css";

export default function Example() {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8 bg-brand-cream">
        <div className="flex flex-col items-center justify-center p-10 rounded-lg">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="src/assets/logo_new.svg"
            className="mx-auto w-60 h-60 sm:w-48 sm:h-48 lg:w-64 lg:h-64"
          />
          <h2 className="text-center text-2xl/9 font-bold tracking-tight text-brand-charcoal font-heading">
            Coming Soon
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-brand-charcoal font-body"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-brand-charcoal outline-1 -outline-offset-1 outline-brand-taupe placeholder:text-brand-charcoal/60 focus:outline-2 focus:-outline-offset-2 focus:outline-brand-green sm:text-sm/6 font-body"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-brand-green px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-brand-gold/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold font-body"
              >
                Stay Updated
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
}

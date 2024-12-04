import { DeliveryIcon } from "@/assets/icons/DeliveryIcon";
import { GiftIcon } from "@/assets/icons/GiftIcon";
import { MaterialIcon } from "@/assets/icons/MaterialIcon";
import { PaymentIcon } from "@/assets/icons/PaymentIcon";

const Services = () => {
  return (
    <section className="mt-20">
      <section className="px-6 md:px-12 lg:px-6 mx-auto max-w-7xl 2xl:px-0">
        <h1 className="text-2xl text-gray-900 sm:text-3xl">Our Services</h1>
        <section className="grid gap-8 sm:gap-12 md:grid-cols-2 py-10">
          <div className="flex space-x-6">
            <PaymentIcon />
            <div>
              <h2 className="text-lg font-bold">Secured Payments</h2>
              <p className="text-zinc-600 text-sm mt-3">
                Secure payment options to ensure that your transactions are protected and your
                personal information is kept safe.
              </p>
            </div>
          </div>
          <div className="flex space-x-6">
            <DeliveryIcon />
            <div>
              <h2 className="text-lg font-bold">Free Delivery Worldwide</h2>
              <p className="text-zinc-600 text-sm mt-3">
                Enjoy free worldwide delivery on all orders, no matter where you are located.
              </p>
            </div>
          </div>
          <div className="flex space-x-6">
            <MaterialIcon />
            <div>
              <h2 className="text-lg font-bold">High Quality Materials</h2>
              <p className="text-zinc-600 text-sm mt-3">
                We use only the finest materials in our products, ensuring that they are
                long-lasting and of the highest quality.
              </p>
            </div>
          </div>
          <div className="flex space-x-6">
            <GiftIcon />
            <div>
              <h2 className="text-lg font-bold">Send Gifts Easily</h2>
              <p className="text-zinc-600 text-sm mt-3">
                Want to surprise someone special? Our site makes it easy to send a gift to your
                loved ones with just a few clicks.{" "}
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Services;

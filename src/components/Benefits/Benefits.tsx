import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { benefitContent } from "../../mock/benefits";

const Benefits = () => {
  const [isOpen, setIsOpen] = useState(
    Array(benefitContent.length).fill(false)
  );

  function openModal(index: number) {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = true;
    setIsOpen(newIsOpen);
  }

  function closeModal(index: number) {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = false;
    setIsOpen(newIsOpen);
  }

  return (
    <div className="grid gap-4 grid-cols-12 my-8 pt-4 xl:max-w-[2100px] mx-auto">
      {benefitContent.map((benefitItem, index) => {
        return (
          <div
            className="col-span-6 lg:col-span-3 flex flex-col items-center"
            key={benefitItem.title}
          >
            <div className="cursor-pointer" onClick={() => openModal(index)}>
              <Image
                height={48}
                width={48}
                src={benefitItem.imgSrc}
                alt={benefitItem.title}
              />
              <p className="py-2 text-sm md:text-base text-palette-base/90 text-center">
                {benefitItem.title}
              </p>
            </div>

            <Transition appear show={isOpen[index]} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-10"
                onClose={() => closeModal(index)}
              >
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          {benefitItem.title}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            {benefitItem.disc}
                          </p>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        );
      })}
    </div>
  );
};

export default Benefits;

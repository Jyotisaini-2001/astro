/** @format */

import { Card, Button } from "flowbite-react";
import { Rating } from "flowbite-react";
import { useState } from "react";
import { ChatComponent } from "./chatComponent";

export function CardComponent({ card }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <>
      <Card className="shadow-md max-w-md w-full">
        <div className="flex items-start gap-6 w-full">
          <img
            alt={card.name}
            height="96"
            src={card.image}
            width="96"
            className="w-1/4 mb-3 rounded-full shadow-lg border-2 border-successGreen"
          />

          <div className="w-3/4 flex justify-between">
            <div className="flex flex-wrap">
              <div className="flex items-center gap-4">
                <h5 className="mb-1 text-xl font-medium text-darkBlue dark:text-white">
                  {card.name}
                </h5>
                <div className="flex items-center gap-1">
                  <Rating>
                    <Rating.Star />
                    <p className="ml-2 text-base font-medium text-darkBlue dark:text-gray-400">
                      {card.rating}
                    </p>
                  </Rating>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-darkGrey dark:text-gray-400 leading-4">
                  {card.specialties}
                </p>
                <p className="text-sm md:text-base text-darkGrey dark:text-gray-400 leading-4">
                  {card.languages}
                </p>
                <p className="text-sm md:text-base text-darkGrey dark:text-gray-400 leading-4">
                  {card.experience}
                </p>
                <div className="flex items-center space-x-2">
                  {card.offer ? (
                    <p className="line-through text-sm text-gray-500 dark:text-gray-400 leading-4 decoration-red-500">
                      {card.price}
                    </p>
                  ) : (
                    <p className="text-sm text-darkBlue dark:text-gray-400 leading-4">
                      {card.price}
                    </p>
                  )}
                  <span className="text-darkRed font-bold text-lg">
                    {card.offer}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative w-1/2 xl:w-1/4">
              <img
                alt="check"
                src={card.checkImage}
                className="absolute top-0 right-0"
              />
              <div className="absolute bottom-2 right-0 flex flex-col items-center">
                <Button
                  color="green"
                  className={`rounded-lg px-4 md:px-2 lg:px-4 font-poppins font-bold border ${
                    card.waitingTime
                      ? "border-red-500 text-red-500"
                      : "border-successGreen text-successGreen"
                  }`}
                  onClick={handleOpenModal}
                >
                  Chat
                </Button>

                {card.waitingTime && (
                  <p className="absolute bottom-[-15px] text-xs text-red-500">
                    {card.waitingTime}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Include the ChatComponent Modal */}
      {isModalOpen && <ChatComponent openModal={isModalOpen} setOpenModal={setIsModalOpen} />}
    </>
  );
}

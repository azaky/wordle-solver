import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/outline'
import { LightBulbIcon, ReplyIcon } from '@heroicons/react/solid'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div className="absolute right-4 top-4">
                <XCircleIcon
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => handleClose()}
                />
              </div>
              <div>
                <div className="">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900 text-center"
                  >
                    How to use the solver
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      This solver can assist you in solving the{' '}
                      <a
                        href="https://www.powerlanguage.co.uk/wordle/"
                        className="underline font-bold"
                      >
                        WORDLE
                      </a>{' '}
                      or even the harder version,{' '}
                      <a
                        href="https://qntm.org/files/wordle/index.html"
                        className="underline font-bold"
                      >
                        ABSURDLE
                      </a>.
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-500">
                      <li>Type in your guess just like in the game.</li>
                      <li>
                        Click the tiles to change the color based on the result
                        you get from WORDLE.
                      </li>
                      <li>
                        Then, click enter to see possible solutions and get
                        suggestions for your next guess.
                      </li>
                    </ul>

                    <img
                      className="mt-4"
                      src={`${process.env.PUBLIC_URL}/demo.gif`}
                      alt="wordle solver"
                    />

                    <p className="text-sm text-gray-500 mt-4">
                      Here are some tips:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-500">
                      <li>
                        When you made any mistakes, you can always undo by
                        clicking the{' '}
                        <span>
                          <ReplyIcon className="h-4 w-4 inline" />
                        </span>{' '}
                        icon above.
                      </li>
                      <li>
                        Click the{' '}
                        <span>
                          <LightBulbIcon className="h-4 w-4 inline" />
                        </span>{' '}
                        icon above to see the possible solutions at any time.
                      </li>
                      <li>
                        On the list of possible solutions and suggestions, you
                        can click the word to set it as your next guess. Of
                        course you still have to change the color based on the
                        result from WORDLE.
                      </li>
                      <li>
                        <strong>
                          This solver can be directly used to solve the hard
                          mode as well!
                        </strong>{' '}
                        Just use one of the possible solutions as your next
                        guess. They are all guaranteed to use all the revealed
                        characters.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

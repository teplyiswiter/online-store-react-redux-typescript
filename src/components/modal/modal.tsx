import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { hideModal } from "../../features/modal/modalSlice";
import { PropsWithChildren } from "react";

type ModalProps = {
    title?: string;
    className?: string;
};

export default function Modal(props: PropsWithChildren<ModalProps>) {
    const { title, className = "", children } = props;
    const dispatch = useAppDispatch();
    const { isShown } = useAppSelector((state) => state.modal);

    return (
        // Main modal
        <div
            aria-hidden="true"
            className={`${
                isShown ? "flex" : "hidden"
            } ${className} bg-gray-400 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}
        >
            <div className="relative p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => dispatch(hideModal())}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    {children}
                </div>
            </div>
        </div>
    );
}

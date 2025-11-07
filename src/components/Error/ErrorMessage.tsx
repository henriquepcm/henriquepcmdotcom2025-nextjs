"use client";

import ErrorIcon from "../icons/ErrorIcon";

export default function ErrorMessage({ message }: { message: string }) {
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center rounded-md p-10 text-center text-white">
                <div className="flex rounded-full bg-branderror p-2">
                    <div className="flex w-10 items-center justify-center rounded-full text-white">
                        <ErrorIcon />
                    </div>
                </div>
                <h2 className="mt-10">Oops... Something went wrong.</h2>
                <p>
                    {message}.{" "}
                    <span className="text-nowrap">
                        Refresh the page and try again.
                    </span>
                </p>

                <button
                    aria-label="Refresh the page"
                    className="mt-10 h-10 w-20 transform rounded-md border-[0.05rem] border-brandborder duration-300 hover:scale-[1.01] hover:bg-brandprimary hover:shadow-md hover:shadow-brandshadow"
                    onClick={handleRefresh}
                >
                    Refresh
                </button>
            </div>
        </div>
    );
}

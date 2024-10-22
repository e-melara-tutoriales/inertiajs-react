import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";

import { Head, Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function ChirpIndex(props) {
    const { title, subtitle, auth } = props;

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title={title}>
                <meta name="description" content={subtitle} />
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form>
                                <textarea
                                    className={"block w-full rounded-md border-gray-300 bg-white bg-color-200 dark:bg-gray-700 dark:border-gray-600"}
                                    placeholder={"What's on your mind?"}
                                ></textarea>
                                <PrimaryButton className={'mt-2'}>Chirps</PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

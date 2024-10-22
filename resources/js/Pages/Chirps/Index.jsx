import { Head, useForm } from "@inertiajs/react";
import { useState } from 'react';

import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import InputError from "@/Components/InputError.jsx";

export default function ChirpIndex(props) {
    const { title, subtitle, auth } = props;
    const { data, setData, post, processing, errors, reset } = useForm({
        message: '',
    })

    const handlerSubmit = (event) => {
        event.preventDefault();
        post(route('chirps.store'), {
            onSuccess: () => reset(),
        })
    }

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
                            <form
                                onSubmit={handlerSubmit}
                            >
                                <textarea
                                    value={data.message}
                                    onChange={(event) => setData('message', event.target.value)}
                                    className={"block w-full rounded-md border-gray-300 bg-white bg-color-200 dark:bg-gray-700 dark:border-gray-600"}
                                    placeholder={"What's on your mind?"}
                                />
                                <InputError message={errors.message} />
                                <PrimaryButton disabled={processing} className={'mt-2'}>
                                    {processing ? 'Posting...' : 'Post'}
                                </PrimaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

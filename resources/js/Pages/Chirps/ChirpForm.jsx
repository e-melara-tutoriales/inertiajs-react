import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import InputError from "@/Components/InputError.jsx";
import SecondaryButton from "@/Components/SecondaryButton";

export default function ChirpForm({ className, chirp, setEditing }) {
  const { data, setData, post, patch, processing, errors, reset } = useForm({
    message: chirp ? chirp?.message : "",
  });
  
  const handlerSubmit = (event) => {
    event.preventDefault();
    if(chirp?.id) {
       patch(route("chirps.update", chirp), {
        onSuccess: () => {
          reset();
        },
        preserveState: false
      });
    } else {
      post(route("chirps.store"), {
        onSuccess: () => {
          reset();
        },
        preserveState: false
      });
    }
  };
  return (
    <form onSubmit={handlerSubmit} className={className}>
      <textarea
        value={data.message}
        onChange={(event) => setData('message', event.target.value)}
        className={
          'block w-full rounded-md border-gray-300 bg-white bg-color-200 dark:bg-gray-700 dark:border-gray-600 text-white'
        }
        placeholder={"What's on your mind?"}
      />
      <InputError message={errors.message} />
      <PrimaryButton disabled={processing} className={'mt-2'}>
        {processing ? 'Posting...' : 'Post'}
      </PrimaryButton>
      {chirp?.id && (
        <SecondaryButton className="ml-2" onClick={setEditing}>Cancelar</SecondaryButton>
      )}
    </form>
  );
}

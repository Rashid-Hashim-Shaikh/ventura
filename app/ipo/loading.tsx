import Spinner from "@/components/ui/Spinner";

export default function Loading() {
    return (
    <div className=" absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 ">
        <Spinner />
      </div>
    );
  }
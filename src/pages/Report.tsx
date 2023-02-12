import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { Button } from "../atom/Button/Button";
import { Attacker } from "../organisms/Attacker/Attacker";
import { reportInitialState } from "../schema/schema";

type ReportProps = {
  name: string;
  teraType: string;
  ability: string;
  item: string;
  move: string;
  category: string;
  crit: boolean;
  baseAtk: string;
  boostAtk: string;
  evAtk: string;
  ivAtk: string;
  baseSpa: string;
  boostSpa: string;
  evSpa: string;
  ivSpa: string;
};

export const Report = () => {
  const methods = useForm<ReportProps>({
    defaultValues: reportInitialState,
  });
  const onSubmit = (data: ReportProps) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
          <div className="bg-gray-100 border-r border-black">
            <Attacker />
          </div>
          <div className="bg-blue-500 h-[91.5vh] border-r border-black">A</div>
          <div className="bg-green-500 h-[91.5vh] xl:col-span-1 md:col-span-2">
            <Button
              name="upload"
              type="submit"
              circleBorder="all"
              className="w-64 h-36"
              label="SUBMIT"
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

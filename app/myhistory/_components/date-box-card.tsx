import { GetTeamIdUserHistoryResponse } from "@/lib/apis/type";
import CheckBoxActive from "@/public/icons/checkbox-active.svg";
import { convertDateToYMD } from "@/utils/convert-date";

interface CheckedBoxListProps {
  date: string;
  tasksDone: GetTeamIdUserHistoryResponse[0]["tasksDone"];
}

export default function DateBoxCard({ date, tasksDone }: CheckedBoxListProps) {
  return (
    <section>
      <header className="mb-4 text-base font-medium text-text-primary">
        {convertDateToYMD(new Date(date))}
      </header>
      <div className="flex flex-col gap-4">
        {tasksDone.map((taskDone) => (
          <section
            key={taskDone.id}
            className="flex h-11 items-center justify-stretch gap-[11px] rounded-lg bg-background-secondary px-[14px] py-[10px]"
          >
            <CheckBoxActive width={16} height={16} />
            <s className="flex-1 text-sm font-normal text-text-primary">
              {taskDone.name}
            </s>
          </section>
        ))}
      </div>
    </section>
  );
}
"use client";

import { Dropdown } from "@/components/dropdown/dropdown";
import ToggleClose from "@/public/icons/toggle.svg";
import Link from "next/link";

const options = [
  {
    display: "최신순",
    value: "recent",
  },
  {
    display: "인기순",
    value: "like",
  },
];

export default function OrderedBySelector() {
  return (
    <Dropdown defaultSelected="최신순">
      <section className="text-xs md:text-sm">
        <Dropdown.Button className="h-10 w-[94px] justify-between rounded-xl bg-background-tertiary px-[14px] md:h-11 md:w-[120px]">
          <ToggleClose className={`h-6 w-6 group-hover:animate-pulse`} />
        </Dropdown.Button>
        <Dropdown.Body className="mt-1 flex w-[94px] flex-col rounded-xl bg-background-tertiary md:w-[120px]">
          {options.map((option, i) => (
            <Dropdown.Item
              key={i}
              className="h-10 w-[94px] border-b border-text-default first:rounded-t-xl last:rounded-b-xl last:border-b-0 hover:text-text-default hover:underline md:h-11 md:w-[120px]"
              display={option.display}
            >
              <Link
                href={`/boards?orderBy=${option.value}`}
                className="flex h-full w-full items-center justify-between px-[14px]"
              >
                {option.display}
              </Link>
            </Dropdown.Item>
          ))}
        </Dropdown.Body>
      </section>
    </Dropdown>
  );
}

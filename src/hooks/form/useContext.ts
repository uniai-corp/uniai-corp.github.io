"use client";

import { useCallback } from "react";
import { useFormContext, type FieldPath } from "react-hook-form";

export default function usePreOrderFormContext(
  params?: Partial<{ checkListKey: FieldPath<PreOrderInquiryForm>; checkList: string[] }>,
) {
  const {
    register,
    formState: { errors },
    setValue,
    trigger,
    watch,
  } = useFormContext<PreOrderInquiryForm>();

  const onCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!params?.checkList || !params?.checkListKey) return;

      const { value, checked } = e.target;
      const allOptions = params.checkList || [];
      const currentListString = watch(params.checkListKey) as string;
      const parseList = JSON.parse(currentListString || "[]");
      const updatedList = allOptions.filter((v: string) => {
        if (v === value) return checked;
        return parseList.includes(v);
      });

      setValue(params.checkListKey, JSON.stringify(updatedList));
      trigger(params.checkListKey);
    },
    [params, watch, setValue, trigger],
  );

  return { onCheck, register, errors };
}

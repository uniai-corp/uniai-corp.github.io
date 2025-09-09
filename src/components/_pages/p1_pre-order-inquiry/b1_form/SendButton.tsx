"use client";

import { useCallback, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import useLocale from "@/hooks/useLocale";

import { useMutatePreOrderInquiry } from "@/api/pre-order";

export default function PreOrderFormSendButton() {
  const { t } = useLocale();
  const { handleSubmit } = useFormContext<PreOrderInquiryForm>();

  const { mutate, status, data, reset } = useMutatePreOrderInquiry();
  const onSend = useCallback(
    (formData: PreOrderInquiryForm) => {
      // console.log("formData", formData);

      const { service_package_check, breed_type_check, ...rest } = formData;

      const getCheckedKeys = (checkList: Record<string, boolean>): string[] =>
        Object.entries(checkList)
          .filter(([, checked]) => checked)
          .map(([key]) => key);

      const service_package = getCheckedKeys(service_package_check);
      const breed_type = getCheckedKeys(breed_type_check);
      const sendData: API_Req_PreOrderInquiry = { ...rest, service_package, breed_type };

      // console.log("sendData", sendData);
      // return;
      mutate(sendData);
    },
    [mutate],
  );
  // handleSubmit returns a submit handler; invoke it on click
  const onSubmit = useCallback(() => {
    handleSubmit(onSend)();
  }, [handleSubmit, onSend]);

  useEffect(() => {
    if (status !== "success" || typeof data === "undefined") return;

    if (!data.is_ok) {
      alert("전송에 실패했습니다. 다시 시도해 주세요.");
      reset();
      return;
    }
    alert("성공적으로 전송되었습니다.\n빠른 시일 내에 답변 드리겠습니다.");
    reset();
  }, [data, reset, status]);

  return (
    <button type="button" onClick={onSubmit} className="pre-order-inquiry-submit">
      <span>{t("page/pre-order/form/send", "문의하기")}</span>
    </button>
  );
}

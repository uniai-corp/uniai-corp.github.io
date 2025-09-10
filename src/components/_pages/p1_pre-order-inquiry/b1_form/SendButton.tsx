"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import useLocale from "@/hooks/useLocale";

import { useMutatePreOrderInquiry } from "@/api/pre-order";

export default function PreOrderFormSendButton() {
  const { t } = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { handleSubmit } = useFormContext<PreOrderInquiryForm>();

  const { mutate, status, data, reset } = useMutatePreOrderInquiry();
  const onSend = useCallback(
    (formData: PreOrderInquiryForm) => {
      const sendData: API_Req_PreOrderInquiry = {
        inquiry_type: formData.inquiry_type,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        service_package: JSON.parse(formData.service_package_list),
        breed_type: JSON.parse(formData.breed_type_list),
        total_breeding_scale: formData.total_breeding_scale,
        contents: formData.contents,
        privacy_agreement: formData.privacy_agreement,
      };

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
      alert(t("page/pre-order/form/send/error", "전송에 실패했습니다. 다시 시도해 주세요."));
      reset();
      return;
    }
    alert(t("page/pre-order/form/send/success", "문의가 성공적으로 전송되었습니다."));
    reset();

    router.replace(pathname.replace("/inquiry", ""));
  }, [data, reset, status, t, router, pathname]);

  return (
    <button type="button" onClick={onSubmit} className="pre-order-inquiry-submit">
      <span>{t("page/pre-order/form/send", "문의하기")}</span>
    </button>
  );
}

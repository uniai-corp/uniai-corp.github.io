"use client";

import { FormProvider, useForm } from "react-hook-form";
import PreOrderFormInquiryType from "./assets/InquiryType";
import PreOrderFormName from "./assets/Name";
import PreOrderFormPhone from "./assets/Phone";
import PreOrderFormEmail from "./assets/Email";
import PreOrderFormAddress from "./assets/Address";
import PreOrderFormFarmScale from "./assets/Scale";
import PreOrderFormContents from "./assets/Contents";
import PreOrderFormSendButton from "./SendButton";
import PreOrderFormBreedType from "./assets/BreedType";
import PreOrderFormServicePackage from "./assets/ServicePackage";
import PreOrderFormPrivatePolicyContainer from "./assets/policy/Container";

export default function PagePreOrderInquiryForm() {
  const formContext = useForm<PreOrderInquiryForm>({
    mode: "all",
  });

  return (
    <FormProvider {...formContext}>
      <form className="page-pre-order-form">
        <PreOrderFormInquiryType />
        <PreOrderFormName />
        <PreOrderFormPhone />
        <PreOrderFormEmail />
        <PreOrderFormAddress />
        <PreOrderFormServicePackage />
        <PreOrderFormBreedType />
        <PreOrderFormFarmScale />
        <PreOrderFormContents />
        <PreOrderFormPrivatePolicyContainer />
        <PreOrderFormSendButton />
      </form>
    </FormProvider>
  );
}

import { useMutation, useQueryClient } from "@tanstack/react-query";

export const postPreOrderInquiry = async (queryData: API_Req_PreOrderInquiry) =>
  await (
    await fetch("http://dev-api.uniai.co.kr/inquiry/pre-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryData),
    })
  ).json();

export const useMutatePreOrderInquiry = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["pre_order_inquiry"],
    mutationFn: postPreOrderInquiry,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["pre_order_inquiry"] });
    },
  });
};

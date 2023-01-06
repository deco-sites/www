export type Props = {
  pricingTableId: string;
  publishableKey: string;
};

export default function Pricing({ pricingTableId, publishableKey }: Props) {
  return (
    <>
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <div
        dangerouslySetInnerHTML={{
          __html: `
      <stripe-pricing-table pricing-table-id="${pricingTableId}"
      publishable-key="${publishableKey}">
      </stripe-pricing-table>
      `,
        }}
      >
      </div>
    </>
  );
}

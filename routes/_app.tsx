import { AppProps } from "$fresh/server.ts";
import { context } from "$live/live.ts";
import ScriptGTM from "partytown/integrations/GTM.tsx";

const trackingId = "GTM-P6D23BB";

export default function App(props: AppProps) {
  return (
    <>
      {/* Add Tag Manager script during production only. To test it locally remove the condition */}
      {!!context.deploymentId && <ScriptGTM trackingId={trackingId} />}
      <props.Component />
    </>
  );
}

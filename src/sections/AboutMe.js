import React from "react";
import Codepen from "react-codepen-embed";
import SectionLayout from "../components/SectionLayout";
import ABOUT_ME from "../../constants"

const AboutMe = () => (
    <SectionLayout>
        <Codepen
            height={ABOUT_ME.CODEPEN.HEIGHT}
            hash={ABOUT_ME.CODEPEN.HASH}
            defaultTab={ABOUT_ME.CODEPEN.TABS}
            preview={ABOUT_ME.CODEPEN.IS_PREVIEW}
            loader={() => <div>Loading...</div>}
            user={ABOUT_ME.CODEPEN.USER}
        />
    </SectionLayout>
);

export default AboutMe;
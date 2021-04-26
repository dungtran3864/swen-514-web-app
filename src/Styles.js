import Colors from "./Colors";

export default {
    pageSetup:`
        padding: 0 64px;
        background-color: ${Colors.green1};
        text-align: center;
    `,
    header: `
        font-weight: 700;
        font-size: 2em;
        width: 100%;
        text-align: center;
    `,
    centeredColumn: `
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    `,
    centeredRow: `
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
    `,
    resetLink: `
        color: ${Colors.black};
        text-decoration: none;
    `,
    darkOutline: `padding: 5px; border-radius: 8px; border: 2px solid ${Colors.green3};`,
    mediumOutline: `border: 1px solid ${Colors.mediumGray};`,
    smallShadow: "box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.1);",
    smallShadowRaised: "box-shadow: 4px 8px 8px 0px rgba(0,0,0,0.1);",
    mediumShadow: "box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);",
};

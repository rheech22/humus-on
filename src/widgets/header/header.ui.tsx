import * as x from "@stylexjs/stylex";
import { color, size } from "../../shared/styles/tokens.stylex";

const styles = x.create({
  header: {
    display: "flex",
    alignItems: "center",
    padding: "8px",
    backgroundColor: color.green,
    color: color.white,
    gap: "6px",
    height: size.headerHeight,
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginRight: "4px",
    color: color.white,
    gap: "4px",
  },
  burgerSlice: {
    display: "block",
    backgroundColor: color.white,
    width: "20px",
    height: "3px",
  },
  title: {
    fontSize: "24px",
    lineHeight: "1",
  },
  subtitle: {
    fontSize: "10px",
    alignSelf: "flex-end",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    gap: "6px",
  },
  persona: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: color.white,
  },
  username: {
    fontSize: "14px",
  },
  openTooltip: {
    width: "0",
    height: "0",
    borderStyle: "solid",
    borderWidth: "10px 5px 0px 5px",
    borderColor: `${color.white} transparent transparent transparent`,
  },
});

export const Header = ({ onClick }: { onClick: () => void }) => {
  return (
    <header {...x.props(styles.header)}>
      <button {...x.props(styles.hamburger)} onClick={onClick}>
        <span {...x.props(styles.burgerSlice)} />
        <span {...x.props(styles.burgerSlice)} />
        <span {...x.props(styles.burgerSlice)} />
      </button>
      <h1 {...x.props(styles.title)}>TMS</h1>
      <span {...x.props(styles.subtitle)}>Total Marketing Server</span>
      <div {...x.props(styles.profile)}>
        <div {...x.props(styles.persona)} />
        <span {...x.props(styles.username)}>휴먼스온</span>
        <button>
          <div {...x.props(styles.openTooltip)} />
        </button>
      </div>
    </header>
  );
};

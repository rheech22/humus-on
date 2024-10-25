import * as x from "@stylexjs/stylex";

const styles = x.create({
  header: {
    display: "flex",
    alignItems: "center",
    padding: "8px",
    backgroundColor: "#008851",
    color: "#fff",
    gap: "6px",
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginRight: "4px",
    color: "#fff",
    gap: "4px",
  },
  burgerSlice: {
    display: "block",
    backgroundColor: "#fff",
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
    backgroundColor: "#fff",
  },
  username: {
    fontSize: "14px",
  },
  openTooltip: {
    width: "0",
    height: "0",
    borderStyle: "solid",
    borderWidth: "10px 5px 0px 5px",
    borderColor: "#fff transparent transparent transparent",
  },
});

export const Header = () => {
  return (
    <header {...x.props(styles.header)}>
      <button {...x.props(styles.hamburger)}>
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

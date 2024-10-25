import { ROUTE } from "../../shared/constants/routes";

export const MENU = {
  board: {
    title: "게시판",
    routes: [
      {
        title: "공지사항",
        path: ROUTE.notice,
      },
      {
        title: "Q&A",
        path: ROUTE.qna,
      },
    ],
  },
  message: {
    title: "메시지",
    routes: [
      {
        title: "발송",
        path: ROUTE.dispatch,
      },
    ],
  },
} as const;

import { Notice } from "../../entities/notice";

const mockNotices: Notice[] = Array.from({ length: 32 }, (_, index) => {
  const id = (index + 1).toString();
  const title = `Notice Title ${id}`;
  const username = `user${id}`;
  const createdAt = new Date().toISOString().replace("T", " ").substring(0, 19);
  const views = Math.floor(Math.random() * 100);
  return {
    id,
    title,
    username,
    createdAt,
    views,
  };
});
export const fetchNoticeList = (): Promise<{ data: Notice[] }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: mockNotices,
      });
    }, 500);
  });
};

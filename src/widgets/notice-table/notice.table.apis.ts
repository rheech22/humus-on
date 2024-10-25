import { Notice } from "../../entities/notice";
import { NoticeKeywordFilter } from "./notice-table.consts";

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
const mockKeywordFilters = ({
  filter,
  keyword,
}: {
  filter: NoticeKeywordFilter;
  keyword: string;
}) => {
  return (notice: Notice) => {
    if (!filter) return true;
    if (filter === NoticeKeywordFilter.ID) {
      return notice.id === keyword;
    }
    if (filter === NoticeKeywordFilter.Title) {
      return notice.title.includes(keyword);
    }
    if (filter === NoticeKeywordFilter.Username) {
      return notice.username.includes(keyword);
    }
    return true;
  };
};
export const fetchNoticeList = ({
  filter,
  keyword = "",
}: {
  filter?: NoticeKeywordFilter;
  keyword?: string;
} = {}): Promise<{ data: Notice[] }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: filter
          ? mockNotices.filter(mockKeywordFilters({ filter, keyword }))
          : mockNotices,
      });
    }, 500);
  });
};

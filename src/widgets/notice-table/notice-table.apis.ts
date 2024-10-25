import { Notice } from "../../entities";
import { NoticeKeywordFilter } from "./notice-table.consts";

const mockNotices: Notice[] = Array.from({ length: 32 }, (_, index) => {
  const id = (index + 1).toString();
  const title = `공지 제목 ${id}`;
  const username = `유저-${id}`;
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
const getDateString = (date: Date) => {
  return date.toISOString().substring(0, 10);
};
const mockDateFilter = (dateFilter: string) => {
  return (notice: Notice) => {
    return (
      getDateString(new Date(notice.createdAt)) ===
      getDateString(new Date(dateFilter))
    );
  };
};
export const fetchNoticeList = ({
  filter = NoticeKeywordFilter.ID,
  dateFilter = null,
  keyword = "",
}: {
  filter?: NoticeKeywordFilter;
  dateFilter?: string | null;
  keyword?: string;
} = {}): Promise<{ data: Notice[] }> => {
  if (dateFilter && keyword.length > 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockNotices
            .filter(mockDateFilter(dateFilter))
            .filter(mockKeywordFilters({ filter, keyword })),
        });
      }, 500);
    });
  }
  if (dateFilter && keyword.length === 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockNotices.filter(mockDateFilter(dateFilter)),
        });
      }, 500);
    });
  }
  if (keyword.length > 0) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockNotices.filter(mockKeywordFilters({ filter, keyword })),
        });
      }, 500);
    });
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: mockNotices,
      });
    }, 500);
  });
};

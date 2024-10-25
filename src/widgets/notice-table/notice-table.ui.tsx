import { useEffect, useState } from "react";
import { NoticeKeywordFilter } from "./notice-table.consts";
import { fetchNoticeList } from "./notice-table.apis";
import { Notice } from "../../entities/notice";
import { Pagination, Table } from "../../shared/ui";
import { color } from "../../shared/styles/tokens.stylex";
import * as x from "@stylexjs/stylex";

const styles = x.create({
  upperTable: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "10px 0px",
  },
  totalCount: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  totalCountBadge: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "28px",
    height: "28px",
    borderRadius: "50%",
    backgroundColor: color.darkGray,
    color: color.white,
    fontSize: "14px",
  },
  search: {
    padding: "6px",
    backgroundColor: color.darkGray,
    color: color.white,
    fontSize: "12px",
  },
  create: {
    padding: "6px 8px",
    backgroundColor: color.green,
    color: color.white,
  },
  controls: {
    display: "flex",
    gap: "6px",
  },
  keywordFilters: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "12px",
    fontSize: "14px",
    backgroundColor: color.lightGray,
  },
  datePicker: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "12px",
    fontSize: "14px",
    backgroundColor: color.lightGray,
  },
});

const PER_PAGE = 5;
export const NoticeTable = () => {
  const [noticeList, setNoticeList] = useState<Notice[]>();
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState(NoticeKeywordFilter.ID);
  const [dateFilter, setDateFilter] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    (async () => {
      const response = await fetchNoticeList();
      setNoticeList(response.data);
      setLoading(false);
    })();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (!noticeList) return <div>Empty List</div>;
  const offset = (page - 1) * PER_PAGE;
  const paginatedNoticeList = noticeList?.slice(offset, offset + PER_PAGE);
  const maxPage = Math.ceil(noticeList.length / PER_PAGE);
  return (
    <div>
      <div {...x.props(styles.controls)}>
        <div {...x.props(styles.datePicker)}>
          등록일 기준
          <input
            type="date"
            onChange={async ({ target }) => {
              const response = await fetchNoticeList({
                filter,
                keyword,
                dateFilter: target.value,
              });

              console.log(response);
              setNoticeList(response.data);
              setDateFilter(target.value);
            }}
          />
        </div>
        <div {...x.props(styles.keywordFilters)}>
          검색 조건
          <select
            value={filter}
            onChange={({ target }) => {
              setFilter(target.value as NoticeKeywordFilter);
              setKeyword("");
            }}
          >
            {Object.values(NoticeKeywordFilter).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={keyword}
            onChange={({ target }) => setKeyword(target.value)}
          />
          <button
            {...x.props(styles.search)}
            onClick={async () => {
              const { data } = await fetchNoticeList({
                filter,
                keyword,
                dateFilter,
              });
              setNoticeList(data);
            }}
          >
            검색
          </button>
        </div>
      </div>
      <div {...x.props(styles.upperTable)}>
        <div {...x.props(styles.totalCount)}>
          <span>전체 글</span>
          <div {...x.props(styles.totalCountBadge)}>{noticeList.length}</div>
        </div>
        <button {...x.props(styles.create)}>+ 등록</button>
      </div>
      <Table
        cols={["ID", "제목", "작성자(ID)", "작성일", "조회수"]}
        rows={paginatedNoticeList.map((notice) => Object.values(notice))}
      />
      <Pagination page={page} setPage={setPage} maxPage={maxPage} />
    </div>
  );
};

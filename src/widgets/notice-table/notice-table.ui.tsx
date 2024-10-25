import { useEffect, useState } from "react";
import { fetchNoticeList } from "./notice.table.apis";
import { Notice } from "../../entities/notice";
import { Table } from "../../shared/ui/table";
import { Pagination } from "../../shared/ui/pagination";

import * as x from "@stylexjs/stylex";
import { color } from "../../shared/styles/tokens.stylex";
import { NoticeKeywordFilter } from "./notice-table.consts";

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
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filterType, setFilterType] = useState(NoticeKeywordFilter.ID);
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
          <input type="date" />
        </div>
        <div {...x.props(styles.keywordFilters)}>
          검색 조건
          <select
            value={filterType}
            onChange={({ target }) => {
              setFilterType(target.value as NoticeKeywordFilter);
              setSearchKeyword("");
            }}
          >
            {Object.values(NoticeKeywordFilter).map((type) => (
              <option value={type}>{type}</option>
            ))}
          </select>
          <input
            type="text"
            value={searchKeyword}
            onChange={({ target }) => setSearchKeyword(target.value)}
          />
          <button
            {...x.props(styles.search)}
            onClick={async () => {
              const response = await fetchNoticeList({
                filter: filterType,
                keyword: searchKeyword,
              });
              setNoticeList(response.data);
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

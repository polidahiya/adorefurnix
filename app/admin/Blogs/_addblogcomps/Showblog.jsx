import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function Showblog({
  blogdata,
  setblogdata,
  setactivelem,
  settextarea,
  textarearef,
}) {
  return (
    <div>
      {blogdata.map((item, i) => {
        switch (item?.type) {
          case "mainheading":
            return (
              <h1
                key={i}
                className="text-[25px]"
                onClick={() => {
                  setactivelem({ type: item?.type, blogitemindex: i });
                  settextarea(item?.text);
                  textarearef.current.focus();
                }}
              >
                {item?.text}
              </h1>
            );
          case "heading":
            return (
              <h2
                key={i}
                className="text-[20px]"
                onClick={() => {
                  setactivelem({ type: item?.type, blogitemindex: i });
                  settextarea(item?.text);
                  textarearef.current.focus();
                }}
              >
                {item?.text}
              </h2>
            );
          case "image":
            return (
              <img
                key={i}
                src={item?.src}
                onClick={() =>
                  setactivelem({ type: item?.type, blogitemindex: i })
                }
                loading="lazy"
                alt=""
              />
            );
          case "paragraph":
            return (
              <p
                key={i}
                className="text-[14px]"
                onClick={() => {
                  setactivelem({ type: item?.type, blogitemindex: i });
                  settextarea(item?.text);
                  textarearef.current.focus();
                }}
              >
                {item?.text}
              </p>
            );
          case "list":
            return (
              <ol key={i} className="text-[14px] list-decimal">
                {item?.list.map((itemj, j) => (
                  <li
                    key={j}
                    onClick={() => {
                      setactivelem({
                        type: item?.type,
                        blogitemindex: i,
                        listitemindex: j,
                      });
                      settextarea(itemj);
                      textarearef.current.focus();
                    }}
                  >
                    <MdOutlineArrowRightAlt className="inline-block"/>
                    {itemj}
                  </li>
                ))}
              </ol>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

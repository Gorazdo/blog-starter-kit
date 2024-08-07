'use client';

import { useEffect, useState } from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const [relativeTime, setRelativeTime] = useState<string>("no date");

  useEffect(() => {
    const date = parseISO(dateString);
    const updateRelativeTime = () => {
      setRelativeTime(formatDistanceToNow(date, { addSuffix: true }));
    };

    updateRelativeTime();
    setInterval(updateRelativeTime, 60000);
  }, []);

  return <time dateTime={dateString}>{relativeTime}</time>;
};

export default DateFormatter;
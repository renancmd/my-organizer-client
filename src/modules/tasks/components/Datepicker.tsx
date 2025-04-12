"use client";
import styles from "../styles/Datepicker.module.scss";
import { currentDate } from "@/functions/generics/currentDate";

function Datepicker({ date, onchange }: DatepickerProps) {
  return (
    <div className={styles.datepicker}>
      <input
        type="date"
        value={date ?? ""}
        onChange={onchange}
        className={styles.datepickerInput}
      />

      <div className={styles.datepickerButtons}>
        <button
          className={styles.datepickerBtn}
          onClick={() => null}
        >
          Today
        </button>
        <button
          className={styles.datepickerBtn}
          onClick={() => null}
        >
          Tomorrow
        </button>
      </div>
    </div>
  );
}

export default Datepicker;
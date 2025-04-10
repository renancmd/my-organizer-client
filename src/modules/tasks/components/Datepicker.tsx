"use client";
import { useState } from "react";
import styles from "../styles/Datepicker.module.scss";

function Datepicker({ date }: DatepickerProps) {

  return (
    <div className={styles.datepicker}>
      <input
        type="date"
        defaultValue={date}
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
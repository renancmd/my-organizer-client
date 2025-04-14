import styles from "../styles/Datepicker.module.scss";

function Datepicker({ date, onchange, onTodayClick, onTomorrowClick }: DatepickerProps) {
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
          onClick={onTodayClick}
        >
          Hoje
        </button>
        <button
          className={styles.datepickerBtn}
          onClick={onTomorrowClick}
        >
          Amanhã
        </button>
      </div>
    </div>
  );
}

export default Datepicker;
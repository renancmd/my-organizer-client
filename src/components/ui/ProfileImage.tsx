"use client";
import styles from "@/styles/ui/ProfileImage.module.scss";

function ProfileImage() {
  return (
    <div className={styles.profileImageWrapper}>
      <div className={styles.imageContainer}>
        <img
          src={"/default-user.png"}
          alt="User"
          className={styles.profileImg}
        />
      </div>
      <div className={styles.imageActions}>
        <input
          type="file"
          className={styles.actionButton}
          accept="image/*"
        />
        <button
          type="button"
          className={styles.actionButton}
        >
          Salvar
        </button>
        <button
          type="button"
          className={`${styles.actionButton} ${styles.remove}`}
        >
          Remover
        </button>
      </div>
    </div>
  );
}

export default ProfileImage;
import { describe, it, expect } from "vitest";
import { simpleDay, SimpleDay } from "./simpleDay";

describe("SimpleDay / simpleDay", () => {
  it("создаёт дату из строки", () => {
    const d = simpleDay("2025-01-01T10:00:00");
    expect(d.format("YYYY-MM-DD HH:mm:ss")).toBe("2025-01-01 10:00:00");
  });

  it("создаёт дату из Date", () => {
    const date = new Date("2024-05-15T12:30:00");
    const d = simpleDay(date);
    expect(d.toDate().getTime()).toBe(date.getTime());
  });

  it("создаёт дату из другого SimpleDay", () => {
    const original = simpleDay("2023-03-10T08:00:00");
    const copy = simpleDay(original);
    expect(copy.format("YYYY-MM-DD HH:mm:ss")).toBe(
      original.format("YYYY-MM-DD HH:mm:ss"),
    );

    // изменения копии не должны менять оригинал
    copy.add(1, "day");
    expect(copy.format("YYYY-MM-DD")).not.toBe(original.format("YYYY-MM-DD"));
  });

  it("поддерживает чейнинг add и subtract", () => {
    const d = simpleDay("2025-01-01T10:00:00")
      .add(2, "days")
      .add(3, "hours")
      .subtract(30, "minutes");

    expect(d.format("YYYY-MM-DD HH:mm:ss")).toBe("2025-01-03 12:30:00");
  });

  it("поддерживает 12-часовой формат и AM/PM", () => {
    const d = simpleDay("2025-01-01T15:04:05");
    expect(d.format("hh:mm A")).toBe("03:04 PM");

    const d2 = simpleDay("2025-01-01T03:04:05");
    expect(d2.format("h:mm a")).toBe("3:04 am");
  });

  it("поддерживает миллисекунды", () => {
    const d = simpleDay("2025-01-01T10:04:05.123");
    expect(d.format("SSS")).toBe("123");
  });

  it("поддерживает дни недели и месяцы на английском", () => {
    const d = simpleDay("2025-01-01T15:04:05");
    expect(d.format("dddd, MMMM D, YYYY")).toBe("Wednesday, January 1, 2025");
    expect(d.format("ddd, MMM D, YY")).toBe("Wed, Jan 1, 25");
  });

  it("поддерживает дни недели и месяцы на русском", () => {
    const d = simpleDay("2025-01-01T15:04:05");
    expect(d.format("dddd, MMMM D, YYYY", "ru")).toBe("Среда, Январь 1, 2025");
    expect(d.format("ddd, MMM D, YY", "ru")).toBe("Ср, Янв 1, 25");
  });

  it("toDate возвращает объект Date", () => {
    const d = simpleDay("2025-06-15T05:30:00");
    const date = d.toDate();
    expect(date).toBeInstanceOf(Date);
    expect(date.getTime()).toBe(d.toDate().getTime());
  });

  it("isBefore, isAfter, isSame работают корректно", () => {
    const d1 = simpleDay("2025-01-01T10:00:00");
    const d2 = simpleDay("2025-01-02T10:00:00");

    expect(d1.isBefore(d2)).toBe(true);
    expect(d2.isAfter(d1)).toBe(true);
    expect(d1.isSame("2025-01-01T10:00:00")).toBe(true);
    expect(d1.isSame("2025-01-01T12:00:00", "day")).toBe(true);
  });

  it("SimpleDay.now() возвращает текущую дату", () => {
    const now = SimpleDay.now();
    expect(now.toDate()).toBeInstanceOf(Date);
    const diff = Math.abs(now.toDate().getTime() - new Date().getTime());
    expect(diff).toBeLessThan(1000); // разница < 1 секунда
  });
});

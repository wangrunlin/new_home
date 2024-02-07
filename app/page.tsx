import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>邀请函</h1>
      <p>择良辰吉日</p>
      <p>我喜迁新居</p>
      <p>特设薄宴</p>
      <p>邀您携眷光临</p>
      <p>共贺新居之乐</p>
      <p>时间：2024 年 7 月 17 日</p>
      <p>
        地点：
        <a href="#">平昌县元山镇中岭村8社</a>
      </p>
      <p>邀请人：王军、何迎春</p>
      <p>
        联系电话：
        <ul>
          <li>
            <a href="tel:+8617723415559">17723415559</a>
          </li>
          <li>
            <a href="tel:+8617778595680">17778595680</a>
          </li>
        </ul>
      </p>
      Hello World. <Link href="/about">About</Link>
    </div>
  );
}

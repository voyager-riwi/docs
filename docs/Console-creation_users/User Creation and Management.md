
# USER MANAGEMENT SYSTEM

## 📌 Project Description
**Gestion de Usuarios** is a console application built with **C#** and **.NET 8.0**.  
It provides a complete **user management system** using **Entity Framework Core (EF Core)** and **MySQL** as the database.  

The system allows:
- Registering new users with detailed personal information.
- Listing and querying registered users.
- Updating existing user data.
- Deleting users from the database.
- Using DTOs for optimized queries (e.g., returning only specific fields like name and email).

This project follows a layered architecture separating **Models**, **Data (DbContext)**, and the main **Program** entry point.

## 📦 Dependencies

- Microsoft.EntityFrameworkCore  
- Pomelo.EntityFrameworkCore.MySql  
- Microsoft.EntityFrameworkCore.Tools *(optional)*  

## 🛠️ Technologies Used

- **C# 12 / .NET 8.0** – Core language and framework.  
- **Entity Framework Core (EF Core)** – ORM for database access.  
- **LINQ** – For querying and manipulating data in a strongly typed way.  

---

## 🏗️ System Architecture

### Use Case Diagram
<div style={{
    width: '100%', 
    height: 'auto', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: '20px'
}}>
  <iframe 
    src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22P%C3%A1gina-1%22%20id%3D%22_L2agMREILj0cOFeYuKZ%22%3E7V1bb9s2GP01BtqHGJKo62PitOuAbOhWdOueBsZibbay6FJULv31pW62JCoJE0T82KB5sURRt3O%2BOylmgVa7m9843m%2F%2FYCnJFp6T3izQ%2BcLzXN8L5U%2FVctu0RDFqGjacpm2nY8MH%2Bp20jU7bWtKUFIOOgrFM0P2wcc3ynKzFoA1zzq6H3T6zbHjXPd4QpeHDGmdq6780FdumNfaiY%2Fs7Qjfb7s5umDRHdrjr3L5JscUpu%2B41oTcLtOKMiWZrd7MiWQVeh0tz3ts7jh4ejJNc6JyQk%2FD7%2FuOX1Tf89hP76x37X1y8O4lbegpx270xZ2WekuokZ4HOGBdbtmE5zi4Y28tGVzZ%2BIULctlzhUjDZtBW7rD1Kbqj41Nv%2Br7rUEo3%2B2oPnN%2B2N6p3b3s57wumOCMK7tlzw20%2F9nebCQbd7vFS9112reUGSKjwfgWubClbyNbkHrU4AMd8QcU%2B%2F6ECv1AvC5FvwW3keJxkW9Gr4HLgV0M2h35FDudHS%2BBhKo1%2BUPj%2BlPiSl7XWvcFa2dzpdC8YVnqWJ2Veb5S5rOqCzK8IFlebsAl%2BS7D0rqKAsl10umRBs1%2BtwmtFNdUBUItHnnpUiozlZHQzskYHqXHJzPwcqZt0JTmsYW8%2Fghe3%2B9dHOdk3bvokNnJlg9mfUnFaoO925X1Um1cI1pxS%2BplLEkErhx4bs3BO4MmrCdNlKQNlKTHml4KXw5TqQhHVWdm7C3BdDlwdKlzsfXUPf9XIIuyM%2BMWQQlZjub7KhheBYxnXOx6LEnLJCIVVeWaa%2BcufseksF%2BbDHNRbXMvsekvcMEZqX%2BIMIzXXVCM31JkK0eK4ILfDt8vlHsTYcoQW6Mh6CGqXgF12PosuDdfmmikF2Zz%2FaugUaUAem0h%2F7A2pt7QJ1%2BMGvDOjRhIEWUkNDGdBDhEGYtgAUeM8M8NZnMrp0IdCwIUQW02UfWR4CJctQBqVL1jAkt5EuWFM4Ywb1pLKOaztdoGMS4YwZ1GPogvBBoOXP0NjQ3csxbKBD2u1T9sqfK5YXZSaa8mdZwJc%2Fg2g4QI0QdPkztHjI02CBJtQ1SbCRlqF83%2FosRpsuUIMUKgbpTUpFfzAG1BihJBgYo8iBNkbxjCOOQOWRSFNSfdBYJ1IlNaM7mlsrq8nEzC7DsqpAlrPdJSegMPnuaAKcilIyAZI%2FF0iJAhLeV3iksNLkx0OYImCYOtZ6OP3ZCpMV2ucnQ7xcaLly1emrMtYXHEtAVmhx5mJYvPyRGoLj5akGfodpZpdUgauhOoHmghZNwFYeZs%2BEmXyOs5Reyc1Ntbmvpk3L96aHg%2FLuveOgICfWiaKaph%2BxdRosNyQnnE1ATYo9WdPPdM1shDqJBlCjZCJGcZCK9Wyzz101A%2FmHVACnROAsI1PSXHb%2BpjlyyY%2FYKn1%2FP7%2BLBuvICcfGZiqAdCYUYT5y1KC7szZ3kWKjgQnHBmZiRp9ZA6MGnfpWfE3LFKcWwhyPKodurCm%2Fs%2BHsqUHrsxoX0gQoP4l9icb2xYe2L54aI%2FfEH%2B8qDPLLYn8H%2Bo0aNN1aeJGFuCdhuByWBsCzOU8NtnsRTsEyVj%2B%2BinlXQHCq91szzomVYU4cjxD3A11ZD%2BaCHCmQV%2Fng2OY%2FJPQ3NnuAcSQfgEcwnpovaaNe7HE%2BwDL8VrLaJ%2BD1101d9T1ZS1XhC3Qq%2B8nUPi86rM5q9Tgcy6pXPUkx%2F%2FqKby5fybeVr%2BN0P6%2Bb3%2BpILX%2FVTn%2Fj9evmqdrb90Vhj6tiwul5P%2BxqntsCcQhH37r6caBl9ubTQTWxa%2BKBRyhgQSuhSCkn6zWtKzkot1AV43CkipOZnlFVfEQyUeN6mgm6qx1Szzd1nwulVmYayahqiyZKGW6XVfVRD2dDXR0EUER%2BWsTrYMoRJKstTPKZ5Ta6%2Bmgs56FqY6aTjrmMDFKTjoPLaTCtoJ%2BAndst2qPsLoBOopEaw%2Bok0ZXXPI7wWAdzOLIggQfsMyNPwQP4Aw6wOWaoDeEfXgkH9JMbpGYa7%2BvKUVULBRTtYCTa4UR2YNSCRIam8D9VtA1OLkO6n48Di7aazjWi3ZUiLBLvaKL8adZBqgG3BfM%2FxgFbOFGFNAuTGiFbMQPksNpeB9REBmcWKHXUwqopIPGo%2BhRB%2BxdfzQTgpzTE3hClGHq03bd7okyEhmoYQ0tVbF3UsoCaY%2B23ucnDU1dBJ1l3j2l7QJ5Au%2BLY1EI35iZX%2B7o5I7CI3pUzWhFYD8fyXGfikySzLktNQw4BkEOaaenA0WOERrqtmY3MVv4PjNWRnm%2BB3hNn6bjR0L2FD7i3em98xWc0KK6mPQH9gDuYMUZ52pqyy1YQdGsrc9OovSYJ6GIwgbFVtbUrZE4UDxUy%2BlmYhP3Qz9B3a5rfZdaWdVjHX6LQ%2F0mo9DxIKiNj%2F73gKQmgwaJ1pOsLEejyGJF1RhQsYddnDHSVwciSResgkPdBB3i6LAUaeQuG5PR1BTRE7B6zlwuzfW9mnMyHyYamsEXcMBqtIwBd9I6sW8d06brDVa6WyHvIM8wdj%2BkbLdClAGNjpQ39LGlMZgRPpi6XoOvXxDMuPTdXmWqiSoXiGJhuXdWdaal2uXv8J3P1sd6%2F6kNvfgA%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E"
    title="Diagrama de Draw.io USE CASE "
    style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '1200px',
        height: '80vh',
        aspectRatio: '16/9'
    }}
    allowFullScreen>
  </iframe>
</div>


### UML Class Diagram
<div style={{
    width: '100%', 
    height: 'auto', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: '20px'
}}>
  <iframe 
    src="https://cdn.discordapp.com/attachments/1421292822321037353/1421292835675570207/diagrama_clases_gestion_usuarios.png?ex=68d8819a&is=68d7301a&hm=318aaf9ddbddca579685911d9d4ab65bcb15a1eb1849c81df7fc74209cc1c2be&
    "
    title="Diagrama de Draw.io UML "
    style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '1200px',
        height: '80vh',
        aspectRatio: '16/9'
    }}
    allowFullScreen>
  </iframe>
</div>

### flowchart CREATED
<div style={{
    width: '100%', 
    height: 'auto', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: '20px'
}}>
  <iframe 
    src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Diagrama_flujo_insercion.drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22P%C3%A1gina-1%22%20id%3D%22933X9pVPVG7qn5loAmvo%22%3E5Vtbc5s4FP41fqyHu%2BExiZ1sZ5Jup5mdbfuyo4BilAJyhRzb%2BfUrgQTIIjb1FbdPRoeDgE%2FfuQoP7Jt0eUfALH7AEUwGlhEtB%2FZ4YFmm7Rnsh0tWpWQUuKVgSlAklGrBI3qDQiium85RBHNFkWKcUDRThSHOMhhSRQYIwQtV7Rkn6l1nYAo1wWMIEl36L4poXEp9a1TL%2F4JoGss7m15QnkmBVBZvkscgwouGyJ4M7BuCMS2P0uUNTDh4Epfyutt3zlYPRmBGu1zwkn6Pv%2Fw9%2Fm6DFQ6%2BXH36%2BDb%2B%2BUHM8gqSuXhh8bB0JRGAEQNEDDGhMZ7iDCSTWnpN8DyLIL%2BNwUa1zj3GMyY0mfAFUroSqwvmFDNRTNNEnNVfRTxXjuckhBueXzwuBWQK6QY9p9Tj79K4gQDqDuIUUrJiCgQmgKJXdfGB4NC00qthZgcC6V9A3dJQRxkKEdawzynBPyriWSpqjFAzrpcup9z2hs8JXoQxIHSYMzzof1xnESMKH2egAHHB1Dah%2FQoJhcuN%2BIizlucPLWHI0rD9criorcQ0BPXjhoVIh3BwUO0Lp7LTkcper6jsaKg%2FwGzOISAoC9EMJNoqtHGySWuN84cgrKsR1gxsnbHWKRnrXjhjvY6MNc1eUdbTYL%2BHkDAJnoVocGMPru2MZyxFJjPP54Bwz%2ByBlBM1e8prH9r01MIZMxxBksAEM5%2BcMsUZJIg9Npt%2F7dzn%2BkSrl26s0DNaQpkandJCbJmEnc1CRhduIZL5203E7pWJ%2BBruj6gV%2BXvwxMxEQQskaJqx45ChVbCbcxCxjPpKnEhRFJULA3P0Bp6K%2BfjSzDDKaPEq7vXAHXPm44xK4rfzfCNt1slflQnipoNmJt5mFB%2BMoem7qlXIRKPzSojZP%2FO3a6jg5%2BeccWJ9qaqH2H31gj%2FGavqV1kt32QD%2Bk57Tn8BsOpqJ5MkhzMTy3ZFqJuZ%2BZrJqveB4RmPqpfCEIc9Df5EY4DIn4NNkOSSFwL7VVpfEOH2a59uD%2BpGCuLMexB1pJEoQ9%2FUgbh7PLvR698Ickt3VIfn9ckhtNbGXsDe4jtArO5zyw0ecoBCxd2OaCc45zQHlv6Umu3NDueX69dy4TJyzOXzFSgLdOttvl0Y7qhv0jEA3P8cauroBeu6xaKAX6Xcwp8yDFWuOKQF55eVgXtU%2BKcyKcuhKW6Zz%2BDbH8zTf5jgSyLOVKKZexd%2BiTCf2bp08RuwUZcwc3%2BP3AYD1rJEObAusJ%2B3mmd45QgQDkay%2BiuuLwTc%2BYCQTw%2FGyeXK8ao4arqgQ7hFvuvYCJfn6Em8uvl73OwIvX6wvwOsFe0ugFm0uEd1LJ79jjD9sdN8YOnYO%2FTWPivqKhM1OQl4es8LFPlTg9xUXOrLbAr%2FRFvjl1snhaXHpnQD5vNvtsV%2B7IpbeCfhdgQ%2F6Bbxexfe6BVMR5SCtypFhKj5oz06lzA%2BVOS318uM1ZOSdNse0ibJJY6Bsytbm3Xi0Na4dov4NMSF84VJOo6JH1Ck47tE52hjpDhPbhmqB4Htt0c3UY5tZX3p4Y7%2F0LX%2Br6w5qz9JNS28onGd%2FqKuXlUTZ28saQ8OxFEuQH%2FP0dzvIuvTvDLqbyahfZqJ%2FaXDHAlVUdN3WKqcnIgMD5BsNRf8tRzmFKdAW67xN0mMHm5Y%2BX2DalagZcOyWYsoNhqOjBZy2%2FoaWDzxgBlqxxiwDyMEL07zaOZlg459z%2Fono9T9VkhMSCKLioJlpDGvVX7nbGvsuok9%2FbAq2dEQDwx%2B2feLo2DoFPX8YOMeioH8O3w2XiBZt0bITykbfxGT8uG6K8oHSE92hl7pHnAg6xol%2BfTZgtXVpTuVVJoTwvQU2lbFWSlUOhh%2BsAMdryQNS1sHR%2FFHewlUTwsBwqwi0zVMcLVLZegPq0nalnECB1TSclq8RT%2FuFuakBeNI9qdp1Vt73dHtSMvfZ6lwl9Y7uXdmw%2FvdMWSzV%2F0GyJ%2F8D%3C%2Fdiagram%3E%3C%2Fmxfile%3E
    "
    title="Diagrama de Draw.io CREATED "
    style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '1200px',
        height: '80vh',
        aspectRatio: '16/9'
    }}
    allowFullScreen>
  </iframe>
</div>

### flowchart CONSULTATIONS
<div style={{
    width: '100%', 
    height: 'auto', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: '20px'
}}>
  <iframe 
    src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Diagrama%20flujo%20consultas%20completo.drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22P%C3%A1gina-1%22%20id%3D%22WbQKPGfwvip-ORiIrDFZ%22%3E7V1bk9o4Fv41XTXz0JR1s%2BzHzm02W5mpqUpt7WTe3ODu9gYwY9xJZ3792oAASwKrB6wjCfohAWODfaTv6Fw%2BnXND3s5efqmyxdOv5SSf3uBo8nJD3t1gjGJEmv%2FaIz82R1iK10ceq2KyObY78Ln4O98cjDZHn4tJvuycWJfltC4W3YPjcj7Px3XnWFZV5ffuaQ%2FltPuri%2BwxVw58HmdT9eh%2Fi0n9tD6aYL47%2Fq%2B8eHwSv4zidP3JLBMnb55k%2BZRNyu97h8j7G%2FK2Kst6%2FWr28jafttITcllf9%2BHAp9sbq%2FJ5bXLB%2B%2BxT9O23PyYRefPvO7z88Mfz58Xt5luW9Q%2FxwPmkef7N27Kqn8rHcp5N3%2B%2BOvqnK5%2Fkkb781at7tzvlUlovmIGoO%2Fi%2Bv6x%2Bbwcye67I59FTPpptP85ei%2FqO9fMQ2777sffLuZfPNqzc%2FxJt5Xf3Yu6h9%2B2X%2Fs91lq3fiOlVK4pHL52q8eWb68c%2Fol6%2F%2F%2BXPy5Sn6%2B%2Btd8TD%2F8pcQTZ1Vj3l95LzNDG%2FltvcDmzH4JS9neXM%2FzQlVPs3q4lt3XmWb6fm4PW83gs2LzSDqB%2FTYXX%2FLps%2BbX%2Fo4L8ZFqY7zdNpgqB3P709FnX9eZCtpfG9w3B2tgxL8lld1%2FnL0mTef3mK6AcFGDdyiZHPg%2Bw5U22NP%2B4Ai0emS0k59cp36hyYRNpz61Kmpj5Wp%2FynPq%2BZIuRgXN2%2FJzRsyb5eidomKs1k7zef3y8VKUvG0ec43k%2BJb8%2FKx3jt0X8lHmnvTnLd36Hn5nFUt4vTnS5OuWRYW7ctmnLLpNJ%2BWj1U2a05c5FXRyKV5AOmz33cf9EH3oXjJxZp6NijjLpS1SKYaJCdDARlfgdyzNvUCGTsFZKIA%2BddyWVdZi%2BVZPl9B%2Bc4Aw4uqmI%2BLRTY1hGJ3UthYFkkXS1gDpVgDpXQoKNErlHrWul4oxVBQ0utGUAMf7Y3nbnT7RrQznrvhBRtRAVJHtCNVtOP7afHY2huSodNI%2F4Oq457K2f3z0pJ%2Bk2wFQg1theGsfnbVcD2aqxcP3C0NB%2BrHua3hTEcUgQ3psduWNdxasylqDjun5pjOjtOqOcqGQkV8RUWP%2FupHReIUKvirUEGcQwVHxqgYavHn18X%2F0OxKTEEBZgzr9Vx61XOnDilBTum55FV6jsLrOdTVc6lOzxGrTk7ii57755NbCLl%2FdjOnFBYBjVa7rbDMx9SteLW4b0OVxRxQWXjEOkoLoSgaCbJGR3ExneIabDkHDUA7jg5TvwW7lZZFquPycf5Y5cu8OfjxnUEeZ9KeGXZWlcqAZPH2yD4cscaOiAdLrIL6S46j0dS6xmD2x9H71qJxXFZVXmoQmE%2FzcV1tlrBiXB5mR7wStkGCGfMR76KZM41PYBXLYsm%2BYlkDUWOaBFhEUE%2FehDWX7Dh6%2BOz8ys2lv5dFcy9b1CZSuDLFEhTXs2NzlTRy29s4gb2msl7evxTLOp8fppgtV56EGbfFon%2BxpYRtRZmOSKIqwJ0X0iG3oBEeLC0Cmv51XAua8iGwWxQXBBsDtqQFz%2B7TmWlBZlsLatgtKy1o4CYKU9NNncgUD49yjYeX6jTiYA4eaKDYcXXITNWhW3wYBOu1W1KHZ3eqzdQhjyyrQxaqOpRMRE6AVSGKrw5yr8W3rwv1UqRuxZ6xSiXbbSWY5HUbMlpeI9DNJ0Q2%2FPTxZ10ee7CYFYrxFZN9ZocBJt2KQGM1H3TFpB6TTFokwaPIKPaGbX0CsjSpnQPIAouEHL3x%2FR2wjbG4AtY2Yug7JmIptkihs6TbHXruYwJglUqNseRWHQVx4yFjCUlVGQiHxhK%2BGnwHZyQxZceJqetKQIp4U2nj9MGxHZAiMod44ICU%2BDltltIwIuVo1vJW2oy%2FtTSgQlLkalccnoem1ZnOTx84rbSFrj6ToF9Ns%2BafcfE8ySa%2Bmxa3MpuColGioQBo40nxSKQBz48pb%2FxXAExhQ0wRxzCFLwVTCq8QIYK11BrruLoS93vh0o8rsOTJgUzyJRjuQPTCdsONXcs9JH4hH8l6UFdywT6%2FEMVXPdir3gxigW7VIyEqKS24WCBJZP3UWhY83f2p%2BBLZ9Y6RQUciR3R2dHnD87RfvoGYstWIW8FB4g0h28bYuJVOJBry2ZFtzbGL25pxGo0ipKouu9uaiUpDgpj2J0xh00pixLGVWxW8FBrIV4EBxQC%2Bz9pTQiSV6KIIBDsSRbhuOO5FVj8E3SpbRjR1yzz1O3Ek2cgkSkfJcRsZwgf1xqYCQJE5t8sxGF0Ct4vL%2BDqwLtl2PBFoJtZxz1PD8NLXrXZr2yjxZu%2BbjbFxq8S5uG9Dz5O76HlqiwBbdjuvxTF7Z3w%2FNJBT0KAqAWvn0Rp1NnpsgXOXzvOqvMHNTUSzbDl%2Bnhbzsr0z0yZHD%2Fksn6%2BuCdJJJjKamRseMr1ywnqR2g9p7JQlgiKQaOBp5iXkoB6Qols2jLjxfRtm2dG2wEYL4omk40gyEjsuOyEMXQcqMuLxUDoOFA52LHPxjP26yjFOUORQdYlo4MGxzgmiyC4nSDxoALFZkkrajMZ0xLiizVKNMhusMyWKPAzFdgNHaLiV3ZQW6ZwKBO2tY4cWef7dmIYqkMl7C4dWgeHQIpnstMYYbWPiYCow9r4TFR%2FQuzGnRILxto7eeMjpqFhO9zJd%2FQ2dd8TIgOld0DpVbueiqClNCQ5Neo%2FXG9a4jbFxi0JGVQrZsVxUAh3W0eWiOEu1xbysZqOoN77QCZPclKQFxy7RM%2BsdiuoM5tKcXa8YujTcdlTnCOMumjeaqGrrq0XjcraY5nVrpymOzo8b0QzEUV%2FnlslC1rUW15VrQHwwV4dfwjJuTKBjjuVjLoBAhxMpCMpTPIpdINBhX9YXAKfFlKTFzp6WOA1QryNppQ4axjiKXNgexL0PkQ0XIWOmPC3mFr0UwVbEsGNSn3%2BJNzOpW9xaNamZyrrbmdQ766F5zseiLWU82djNkOoOyUUSGqmlo0Sn7XTNqRHaEt4GAIcv2LBvDohVvl%2FhudV3hHrDpwdYxIzH1K3KWuK%2BDU08FIErPY2Nh%2BGJ%2BMJUvmLj8JTvxUbsGDZU4kCYVeeIjCdHqPAMNBHqOKhMezkysN4g%2BjwEaI7IktME1MpRLdt%2BwGm6q6rsx95pi%2FaE5eEfojzt%2FpConPzB9M6kC5oX63s4rw93qLWkuz6cXJSr%2BXPFg%2BNXk6ZXqRrkSNwK6TK14tPbcr7OkdRlnbVfMMk1%2BUJ52%2BEOTiHuDmRUhiUjIxcK5CF%2FIsknoMu4GaGwEF1Bl8okuqJLk8REcrCXkBFyAV3eRPQBopamxKcYDJN6JxL7ojABzBjTMWVulUpiGv7TsaglgjbzdVFL2lj6OqVnN3DJQBM1jsNDw4TSqzzHjHyVCNWtINJIY1Ui5J2OGbhiBS4X5XxSNBILtUYmVfEYOxL1vAAWNTNlRMVgFMMDaW3QHKil8OXZt86YBgnlRmtDcz40%2FDbX44VSAUVMiSvxQhHJdF9v2bckYg3H7UBEA2wr%2FNEbv0Y0jsKS0S4tuzEmHIkXepNusx%2FREIGKfiPELR4Wu4AQsPnYgKW3j96315GJWLfTynJYwpuNVgDGBDbExvkN%2BROdpwsoq3P%2BUJCh80TxMNwPLKAofojxV3I%2FpAuG4X4IuSu%2BnBrygq7KmMqBJ8p0e%2Fd37P6OypX3RZxP5V79t8Ozy5TCCue%2BHVC5oCQeSyoXqJLZjnd%2BbpUrKpK4TbeLVX70VuXu06Oh9a3SS7aRjxMaFyX4qnIPzi5zip1jLuD5KXbRoqwO1f2XA2nK1yq5vrBCb7cEy93ucBxr8c2YDt8DFkb0Ze0FiL2ZMk%2B4WwlAdu1fePqYxm6xieJXsokwtEWji9klxIU6F%2By6Rbh31vfDw62wXQpqpP6jZQw5N6bDuKivdSwJ7iqNlKP96dHvV772gh6%2F9ZYfO30gr1Ulx7lO%2BtCZuIk7vA9vUjUn4FzDVzvgjIIVKTp648dr4kXLYm7QV67Op%2BvOcg9l2xZuDyJhupZYVn8Ji0exijmmwRznW3gOsAnMuxXZmmPJNUwr%2FYlgxSb0lvN1t%2B0ZxtSt7YBcJc8ddSwJuKGhOpYkoqmWyWbXsYyvycneWd8PD%2ByUykPEm3Xs9MGxnZxscGuXTC8e1Ce%2FisoyY844VRfA8RTqyMCpcqthiLjxszhVk6LKx%2FtmwBYgWZheFUpl1PF4xDQWhnW3ypu9XQBulSkBirtVpFnwsYPWo8Zj49beIq7hDx1zjyi4vaBxj3DshHuEfZnmAO6RaaVE7lilRFCX1%2B28m%2FGYupF3w6SrNCh6XRrt1Rc4mHfj%2FhVnVItEEMyd8RC9p1rgAfWDOXnULS4SV8mjOtdyZRXdTetitnorb65eLrJ5Z2rEfz2X7Qf32fjr42oS3I7Ladk4gHetlKpsvhRibqQe7X02befz7SSrvv5UPd7%2F1Ezz5sEi8d%2FP6%2F%2FbT3BLw23f7L%2F4%2Bee107v5%2BUNM133M73ze9VOE4fRiqdMwwakbTi%2F2z8qw5%2FQa16F0i7ElNmb4uzQMuDKYNinmjsUcX9ekGDFw40njLFPh0wB6yhfAVuLG5Hq3ehRvp4L7i9Hpg2M9IUiY5YTgsSbFrjp8st%2BduuLuwUaDHF%2FTzTsWgxlqR2%2B8x9vLpg%2FZ%2FZp5WRfjbLYuy7neFBg1btB0WrQUTL89JJR2S2gRhvSb%2BDTQG2wLn487%2BChLusBbGYNHobd6tzf8p%2BLR0PxwzPqgHiZRBnCFj3q4%2FSqWgnEwj974nor9nE2LCtbO0PhGHIH7RtQb0tEeACJGu%2BqOptyuujNv7%2B7WXmZNoYLPhTIDmilddwesgc%2FjvHk9bu2Q1lhoJ35jl0zvNh%2FMislkNTd0SOrOlzOACUvtC0W5qX0gxRqjgQxmNKihGi%2FlGnflyhm0XFVr2Uu5Jl1DN6WqlWtXrpol0ke5pvKairblr6BEq9kB4qNoidSwCRECrAs0bHMfBUul9o9oewBMsCopz0fBIimSh3ijHWK1u4dd2YaxgKGIKtvRD3RwsyreJAxli6VA2KHek3ZlG4i%2BlfYebGQbbf8wsJhxEGImmm5n%2Bu5KdqUbxtpGE6XZhAOyVemdPspW8SFwAh1OSMII0yhVWEmkYYPYlWwYgRrJhyBEE0m2K1c18%2B%2BlXJUZy6DdXhRdqX1HhGNaJ4S6Vftle%2BP7VJk28f%2BQz%2FJ5MVdz%2B90RtdB2Lu02gUC6FjHinH0kUNLS%2FIcSWxhOCebdcu%2BIMTZKCbSmCcOgi%2BXQZUzgjWUUqZGg31SUOy9cSqSZS6FND4RUVeqjZFkqT1toYxkhVdv6KFmays01wI06pEZ9fJQsZorz7IBs1ZiPl7KNu%2FoAM40BZlmyqoHgo2Ql7xmn0DQHhMIwDiT6CEbwtoFKdPBRsBRvfSoRmEAxtGxxGHYXV2I%2BhNMRhRZuGAaCpBFQkkYahr9l0arRdR9Fq9peKIrAZavG172UrTxvUcp1vVYsCzcMKwHTrnATcCuBhLGSYSnwFWMMrmyJGkLwMaao6FrCwSUbhoVAuGzaUgItWhqIPpAZkU4EwqmqET60ZXMl6Yq9rJNy%2FDxblynqSXrdr%2BX36f6MWbBUdby2u%2Bz3d21hjQiH6zLJvUkJHxyC%2FtTu%2BTO2m0t7qibQSMpenq9owvEHlbrHFvPndlf4AVh4ssVbpQU2%2BNHt8RY0zE4mebA0sijnHTaAzl771wxA20SWNQCpYelgAER5%2F1ZH2%2BBBilADBM%2FZKwObgYfLVsPg4NH3Lg8CPCzqJn454w6sPd6U9TkFPmfvCWAGn5TbNt7UgGc48BHZMyFc5oDpJrYuhw0foIpxCIlKBtbwoxLHw8EPlSi0jas3QirL0zaCvCkjfgqCzl5pyhBBhNlGkJoVCghBShUCNmJqHk6PoMHibzFoF0NbCDp74URDBDEufcfgCFJJQsEgiBNZuvqdBonVHICw0oMG0PlrfxkCKJH33wwNIKbmy4IBkFKvJYkc8IL4JaxAYqG3DSAc2faCxJOGCCASS7ULIgruAvFLcIEYBoIPTmzDB4cLn1ipXxOTkcrhsAwgURwobAABJVAxiywngVjAGVQFQJRjXeEy2wi6BA4PA8qiYh7ZXoICTqNu%2BWZCunECbsElFxFBAMqi4iS1DZ%2BA06g0khyghMPD5yLiB1B9txCyDZ%2BAs6hE7hIUacLXtuFzCSSE8%2FdJNoQPEQEia%2FAJOIUqrz6E6PYv2IVPehHRA6D8KWG2GQjiSYOED6KSdAn46pOq4U4f91Tepq5tqUzDqBa9qy4pNg3E8BuBUzXE6KVsUyx3QgDvkoRSNfjkp2wlMjd0mySUhlEuWhYsfJcklIZRMFqRLHz5uzSMljMaRetGldxUtXa9lC%2BKlPpBLnRMwprK2F7KV7JuneiXhAOpn61YuE50TMLCDfRduvLUpbELwg3EOZOFG0P3%2F8OB1H3XWAzwrXxwFIpv5lorHxyF4pzJ5UcjcMmG4kK41swHR6rz4GNlsR3fSRRNioFDNTiQLhC3SCr7HsNLVvUZ%2FJSsNGcT6AraOJAuEIpkUQQdEseBNIFQRYuhu0DgQLpAKJoWUUJHgkkFJ90wqpOrEzdOdo3h4KQbRn1yde6mGLywPkZqTsdP4UpTF4P32sCBNIhp5q3aMAo8RBNIkxh13jLw0GIgPWJ085bDCzcUx0wVbgoeXcSh%2BGaSpUAweHgRh%2BKbyaKlGmq1ZdGG4ptJSxmJhwvdNm%2Brsqz3SdHNYz39Wk7y9oz%2FAw%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E"
    title="Diagrama de Draw.io CONSULTATIONS "
    style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '1200px',
        height: '80vh',
        aspectRatio: '16/9'
    }}
    allowFullScreen>
  </iframe>
</div>

### flowchart UPDATE
<div style={{
    width: '100%', 
    height: 'auto', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: '20px'
}}>
  <iframe 
    src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22P%C3%A1gina-1%22%20id%3D%22FFAcJKJOS7paCnrQW_I6%22%3E7VtRc5s4EP41nj6lA0iAeYzjJNeZ9qY3nl7v7k0B2agDiBMisfvrTwJhW0Birja2fL2XBC0rIa32034ryRNwl64fGcrjTzTCycSxovUEzCeOYwPPEv%2BkZFNL%2FADUghUjkVLaCRbkO1ZCVW9VkggXmiKnNOEk14UhzTIcck2GGKMvutqSJvpXc7TCHcEiRElX%2BpVEPK6lU8ffyX%2FBZBU3X7a9oH6TokZZjaSIUURf9kTgfgLuGKW8fkrXdziRxmvsUtd7eOXttmMMZ3xIhezxYW7%2FhZdx%2FBsoFzeR9Xvg3Tiu6hzfNCPGkTCAKlLGY7qiGUrud9IZo2UWYdmsJUo7nY%2BU5kJoC%2BE3zPlGzSYqORWimKeJetvtuhpNQUsW4rf62%2FgAYivM31KEtaIczd4nlGkeMU0xZxuhwHCCOHnWpxspr1lt9XaGFQ%2FKtv%2FGzqrhZ5SU6lMfMhIS2jV%2FkgjflmZ%2BiQnHixxVBnkR8NKNiIq8dvglWcvJeN2qz5hxvH7TCuotCJQ%2FvOx8PVD%2BG%2B%2B5eSM7vZ2CK%2FNHONQfPbP8EXb8ceJ4iRjBrMhRps2A93cp16iZ8CF%2BgxKyyibgVmgkeMkr4zUK4mkl%2F%2BMEh8K1M8SEVlmUiEk%2F91AqPTh7KvJaN6nrPNQfrKs24og8t0XH9yunskMfIvFH9Me6TxFJDvRDiLWutHyTxTR9KovDYD0FNj3%2FvUKniqW2a3XQakP3jHAFdsckZsPVGwhXYBkFV%2BB04PprT%2BgQnf2IngQD0wNFDY15KMyFmRBInyOC4tyqFymJonpmcEG%2Bo6eqPasCDMl4NRZ3NnHnvaZ%2F0y863r0lauorGhfq83rrvWvDQHf7ujTY8qrtz3Iweyp0uSyED7SnZtuFI2bL%2B6%2BiAhiFiqbfe6j4crpo0cQtC69JwfGrgeKSIaFZ2BUyAOwJCFYPf5uOFhAuwt%2BEBdnmD1lfREhV%2FFM1VxXma620UaUfh0wTHw5DZmoUZJp%2Bj8L7PtGCs4r0pTgr0DeBGevdly2OsgpMmQgAQiuiJgLKdnRAQdjNh7asK9by%2FrEQBS9CsS6AKDAQUdAwagbOgqgIcVrI%2Foe8RAmWj%2FVW2y6%2FMg5NnttCE%2BhBE%2BxDkzNafJp2ZuuBZF2EXXITxvb1NM9zulG9z2pwtCUIXBefhUODM3SMWkrgmMH5PiK8WklClObVUiLSMFzItaMwc%2FFooQD0cFtw3lB8kbzu%2FKG4gcVh%2FJx8k72qessY2uwpqG2IbirfuMpUjzNTaLXmum7xpEm%2B2wWr0VsyjfMesSWjzHujZv1HN2DUx6E2Z02j4%2B%2FOQP9%2FFOuKrllRMOgAa0FMBpZ%2FNLC2e52Wowe9G%2Bc4qJ0BTd2d6dNxltsq2RHTxGpjilxIkPI7MJnZaAIeTKQtvqfHIn%2FaQ1ucs%2BY8sHvWtxBWZZeld1C3U9CT5EzPuXPpwp8kLLgDw4Jr1mZ%2F0%2B9RFpoFTUio8qOsxM%2BoZ72RrlpJl4SlKCSVHGQmLkKBcxhc%2FYuQNRq8ruxMzB26HemaxZ7cho1cCXtyj09LduzJt3zN740%2FKXZ%2FkuOy4Wgy67jMu7Ikv%2FGnUdBkfC7ijnkUcyeGEZIIZ4YmHtPWJpht9WQeZ2XU3kUY9RGL1FBm7JnFjN0xmfFjiVjUnBs8VWcFFpZtzuYmoiDwWyjY3se%2FWF7ZPXEsLp59%2B4FpZvKu7IcI3lBG45384nf%2FdrpttecUtier7quqd%2Frw653nJkTv3SLU7BTKe0WC6zAmuU4qmde7oetUEaNcPgp3QEmCE7piKJVsDDMibCMpnP7u8%2B7FIcxW1wOUG57qrpJltSYcWD1pfi%2BKR%2BPL3RuZ5l2vsNoxAvZcmzzRBQtR3P3Cqwba7ndy4P4f%3C%2Fdiagram%3E%3C%2Fmxfile%3E
    "
    title="Diagrama de Draw.io UPDATE "
    style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '1200px',
        height: '80vh',
        aspectRatio: '16/9'
    }}
    allowFullScreen>
  </iframe>
</div>

### flowchart DELETE
<div style={{
    width: '100%', 
    height: 'auto', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: '20px'
}}>
  <iframe 
    src="https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Diagrama%20sin%20t%C3%ADtulo.drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22P%C3%A1gina-1%22%20id%3D%220P3VQ-P8n3i7tTqgS9dD%22%3E3Zpdb%2BMoFIZ%2FjTW7N6v4M%2B5lm2lne9F2pGi1s1cRwScJO9hYGDfp%2FvqF%2BCM2kDbNOJVnWqkxB4zNec%2FDAVLHn6W7LxzlmweWAHW8SbJz%2FM%2BO57mTwJMfyvJSWUI%2FrAxrTpK60cEwJ%2F9Bc2dtLUkCRa%2BhYIwKkveNmGUZYNGzIc7Ztt9sxWj%2FqTlag2GYY0RN698kEZvKGnvTg%2F1PIOtN82Q3uqpqUtQ0rkdSbFDCth2Tf%2Bv4M86YqK7S3Qyocl7jl%2Bq%2BuyO17YtxyMQpN5CMYMKqu54RLesB3j%2Fez%2B6fHP9amh%2Bcme%2Fc%2BElJmZIM5J9bSlKSIUyqqqwei3hpHCQfIrWQhZvthgiY5wirmq0MB2nbiJTKkisvV4TSGaOM7%2B%2FzEwTxCkt7ITj7Dp2aCMewXMkac4T1oJ%2BBC9h1TPWIvwBLQfAX2aSu9cPa%2B3X4%2BXVxe9DSDWrbpqNjY0N1%2BKzbng8elhe1k485PC%2BF4e85o1IHgbg03yfyj3L1jHEObO9uGcS89jXBrBo%2Fkh9QCcENAWRc5epStaMUKFtzlErv5cCJfGfget3XQ8U7NVvFGLBVs2UcBtLVw2gW9DVzXYtokUW0aADRsGsoZoZ8llyrqUWWMEVFQXDfa7Aj4pu8nvwR1qV%2FmppMvk6nShVV3aueK1jJMZgQyxhagzBiDZLejGa6uePG0OLFxsaBIkGe%2B%2FOgzbX1E74yIl%2B8VTHw%2BipONXGqUdU3daetN%2Fppo6HpqHKD0dFe6HbUJ2lfAOJ4Y%2Bh%2FUxZ4j6tyXspk7O9LCQjFVLG%2FVN2URYl4I44NUM4wFMX7Z8oQ4iSwURd7Sz%2BKLkOd96HUeSOnrqWrC103XkZKnTsUdt7lsFuxMksWeAP4uxEFfzVMTSCTSzyJXsIc%2F84IDr5h6bJ8P1urFUT2jJZMr5aToTKavgqxsWVbhgzClj9qtroQdeEyomKkhA2W2PzLEZYxsdj704iEhzadpZAV6F%2BoNgKfDtxlffg%2BHU1vckGpFqiCnbGuDNWvdS%2Bw%2FxmGwnCqOdw7kcIhNgM4MHz%2F%2BPR%2BDlvaeqzt0TuJNoOqLnJamIwFuCtNNl2OU4ELgzc6Gg44ScuK8HQhl3xpbu4BG%2Boq1pyZ59zc3RZCbfuuXaUYrEvebsHbnZ%2FKe5Pf5vLhj7%2BbHI48Bfp95wc2%2BGJLFMVDwBcaEsyVs%2BPPY8qEr7Jpi6ixAKonsqEyYlu%2BAKAow2rTdmI6fMqBd8%2FAJtX9KEG%2FUD4Mgo%2FMh5GZDz8%2BHdqo6lHXCZOR0Ba6mmr6HuHkdKjLr3c0HG0JUBCwaA5AdOFv26PNwxlKlfqoOvlcogIaQyJ5Ko4i93OdsIShhbeLnbBMLSlwRMnvLRJtITQSIvW0FU4Gyn9tgFzgqLPEVhTf3g%2FWq9FEXWP1tQUWSLYVYGbCkX81pHk7ikwcvcml0l9suH5MNNpo6518dsNnpBhG%2BnnKuRhGl0uMUuIFZSw3v3S6u7csh87kCVyZ4KY2nq6iqY8GSm%2FT%2BO3lpG2DNwROjR%2B94ahyO0y9Y0WpnaF0odHEHgk2U209efbxiq7%2FqccrUg300mmWqwbFKy985DmHUKl6%2FFEmBzw2PzOWuruPny%2BQzt6YGBPJ5edf83D2o7XuZdTxix3qOVI%2FpjtXbKOjC80azXPOnDVk8fCfW1Xzw%2F%2B%2F%2Bbf%2FAw%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E
    "
    title="Diagrama de Draw.io DELETE "
    style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '1200px',
        height: '80vh',
        aspectRatio: '16/9'
    }}
    allowFullScreen>
  </iframe>
</div>

---

## 📂 Project Structure

```
Sprint-2_activity-1/
├── Models/
│   └── User.cs              # User entity with attributes and annotations
├── Data/
│   └── MysqlDbContext.cs    # EF Core DbContext configuration with MySQL
├── Program.cs               # Application entry point
└── Sprint-2_activity-1.csproj # Project configuration
```

- **User.cs** → Defines the `User` entity mapped to the `users` table in MySQL.  
- **MysqlDbContext.cs** → Handles database connection and mappings using EF Core.  
- **Program.cs** → Console application entry point.  

---

## ⚙️ Requirements

Before running the project, make sure you have installed:

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download)  
- [MySQL 8.0+](https://dev.mysql.com/downloads/)  
- [Microsoft.EntityFrameworkCore](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore/)  
  Provides the core functionality for Entity Framework Core (EF Core).
- [Pomelo.EntityFrameworkCore.MySql](https://www.nuget.org/packages/Pomelo.EntityFrameworkCore.MySql/)  
  MySQL database provider for Entity Framework Core, enabling integration with MySQL databases.
- [LINQ (Language Integrated Query)](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/)  
Used to query and manipulate data from the database in a more readable and declarative way.

- Git (for cloning the repository)  
- An IDE or editor like **Visual Studio Code**, **Rider**, or **Visual Studio**  

---

## 🚀 Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/voyager-riwi/Sprint-2_activity-1.git
cd Sprint-2_activity-1
```

### 2. Restore Dependencies
```bash
dotnet restore
```

### 3. Build the Project
```bash
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Pomelo.EntityFrameworkCore.MySql
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet build
```

### 4. Run the Application
```bash
dotnet run
```

If everything is set up correctly, the application will start and connect to the configured database.

---

## 🛢️ Database Configuration

The database connection is defined in **MysqlDbContext.cs**:  

```csharp
options.UseMySql(
    "Server=168.119.183.3;Database=tren_voyager;User=root;Password=YOUR_PASSWORD;Port=3307",
    new MySqlServerVersion(new Version(8, 0, 0)));
```

➡️ Replace `YOUR_PASSWORD` with the correct database password if needed.  
➡️ Ensure that **MySQL service is running** on port `3307`.  

---

## 🧑‍💻 How the System Works

1. The application starts through `Program.cs`.  
2. It connects to MySQL using EF Core with the configuration in `MysqlDbContext.cs`.  
3. The `User` entity (`User.cs`) maps to the `users` table in the database.  
4. CRUD operations can be implemented to:
   - Create new users
   - Retrieve users (all or by filters)
   - Update user details
   - Delete users  

The system uses **Data Annotations** like `[Table]` and `[Column]` to correctly map properties to database columns.

Example of mapped entity:
```csharp
[Table("users")]
public class User
{
    public int Id { get; set; }
    [Column("first_name")]
    public string FirstName { get; set; }
    [Column("last_name")]
    public string LastName { get; set; }
    public string Email { get; set; }
    ...
}
```

---

## 🔧 Useful Commands

```bash
# Restore NuGet dependencies
dotnet restore

# Build the project
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Pomelo.EntityFrameworkCore.MySql
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet build

# Run the application
dotnet run

# Clean build artifacts
dotnet clean

# Apply EF migrations (if configured)
dotnet ef migrations add InitialCreate
dotnet ef database update
```

---

## 📖 Typical Workflow

1. Clone the repository.  
2. Install dependencies with `dotnet restore`.  
3. Build and run with `dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Pomelo.EntityFrameworkCore.MySql
dotnet add package Microsoft.EntityFrameworkCore.Tools
` `dotnet build` and `dotnet run`.  
4. The app connects to MySQL and manages users in the `users` table.  

---

## 👨‍💻 Authors
- **Brahiam Ruiz Alzate** 
- **Emmanuel Jaramillo Zapata** 
- **Jeronimo Cardona Restrepo** 
- **Ricardo** 
---

## 🤝 Contributing
1. Fork the repository.  
2. Create a new branch: `git checkout -b feature/your-feature`.  
3. Commit your changes: `git commit -m "Add new feature"`.  
4. Push to your branch: `git push origin feature/your-feature`.  
5. Submit a Pull Request.  

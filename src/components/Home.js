import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Home() {
  const navLinkStyle = { color: "white" };
  return (
    <>
   
      <Container fluid className="my-4" >
        <Carousel
          className="m-auto"
          style={{ width: "1300px", border: "8px groove grey" }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "https://lh3.googleusercontent.com/J8VzciJYnX84ysbHqR9CkWbHj-T7cttfc5i_maN77SQiTXciFMqogOt9W2zOOM_m9Q30ZSR3=w1080-h608-p-no-v0"}
              alt="First slide"
              style={{ height: "540px" }}
            />
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/home/Del.jpg"}
              alt="Second slide"
              style={{ height: "540px" }}
            />

            <Carousel.Caption>
          
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "https://jstmart.com/wp-content/uploads/2021/01/jstmart.png"}
              alt="Third slide"
              style={{ height: "540px" }}
            />

            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/home/sub1.png"}
              alt="Third slide"
              style={{ height: "540px" }}
            />

            <Carousel.Caption>
  
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </Container>


      <hr
        style={{
          height: "2px",
          width: "1150px",
          borderWidth: "0",
          color: "gray",
          backgroundColor: "gray",
          margin: "50px auto",
        }}
      />
      <Container className="d-flex flex-row justify-content-around flex-wrap">
        <div className="d-flex flex-row">
          <Container
            className="d-flex flex-column justify-content-between mr-3"
            style={{
              height: "400px",
              width: "130px",
            }}
          >


            <Container>
              <img
                src={process.env.PUBLIC_URL + "https://world-geography-games.com/img/home-america1.png"}
                alt="Users"
                width="100"
                height="100"
              />
            </Container>


            <Container>
              <img
                src={process.env.PUBLIC_URL + "data:image/jpeg;base64,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"}
                alt="Users"
                width="100"
                height="100"
              />
            </Container>



            <Container>
              <img
                src={process.env.PUBLIC_URL + "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFhUXGBwcFxgXFxgcGxgYGBggGxcYHiAYHikhHBsmHhsYIjIjJiosLy8vGCA0OTQuOCkuLywBCgoKDg0OGxAQHC4mIScxMDY5OC4xNzA2MTkuLi44Ni8xLi4vLi4uLi4uNi4uLi4uLi4wLzAsLi4wMC4wNi42Nv/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwQHAQUGAAj/xABREAABAwEEBgYFBQwIBQUBAAABAgMRAAQhMUEFBhJRYXEHEyKBkaEyscHR8BQjQnLhF0NSU1RigpKTstPxJDM0c4OiwuMWJURj0jV0lKOzFf/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBQb/xAAvEQACAgECBAMHBQEBAAAAAAAAAQIDEQQhBRIxUSJBYRMUMpGhsfBCcYHB8eEj/9oADAMBAAIRAxEAPwC6esMDAccfIV6TsyDeSPXWE2eIvwyyxmiUCEgDHhQCiCBJjPvuFMaUYgZZmg6k7sox8aL5Ob78csqAygkgmSd2WU0GycTGV/CaaAUg533eykpQq4wcSfdQBMLxAHG8/F1GgknHwuzI9lLTZzmYui7lTUNkTy9/voBSkqOO4x541lswoxf9n86AtqVJIN8eG6jDJJk3Xzdjf8CgD2iTE+HvNC4FE8JHsom2yCO/1CgcSok3HcPfQAgwRwxjvpi1nCQMMLziB7aX1BN2Au8gffTAyRnN4x4H7BQHngrAHKlLEeIPgBjTXZJAgx66WGlYRvkzv+ygGrWeA8zXlbUCDed/Kg+TnfN2fI++jfmIGdAJUm6/7fSx8PXTQ4YyHHHyFB1ar4GYxOQrIs+F+eFAFJ2SZk/bQFBvJjE9/ZppkJjPh66SGlbsoxzOJ9dAGyoxAyzPGibJMmZ3ZC8TQBg33xwyxpiUlIOe7wAoBWyTedwv7x515lWIAx4/F1YShVxIOM+6iRZzmY5UAaFEnHwoCFE34SfbTG24Pd7aSpKlSYNAZbVBuvuA9VGVEmJi/LkczyoeoJO4eeXuokNEEX5+z7aAw8FExldQEwRzOHM+/wA6JYUVYGBh76x1JN2F0ev20Aa3DwHmfdXnQq4A5XzzFYLB3zhjzHurL0kgQYzoBSkwPDncPjwpxWeAnvpXVKwjfN++71UYYO+fj+VAZM7Ig3nfxFLKYEnjz9LGmOzsgDdlQ9Wd27E5A0BlLh2chGZ9wo2pxJnKlps5i892WFObTHifXQAh8bjWW3ZJuwqOkDE8THhnTmCIIGAoBgcG+gL440hKAeN2A5fzryEzcbhcOd5PdQEhL0mIotsb/j4NJYUJuzEn2UKkgm/ebhj8XUA0vDDHlXuuwgG+o4TEjAX+r48aNspCoGOHdffQEgqGFCt0D7PjjSngCTJjDnn76HYhVwgEjHnQDi/wNGVgRN1RgUiM8+ZNMfyvAuPsoBinAM/CgL43H4wpC0AXgHDlN2N9EQnPPHui6gJAXdJu/ndXlOgCZoCqUpOGBpJbETiczlQDw8Nx/ljXm3ZBMQBSIESd2WUk38aaCNgxgAQKAd1g30vrxxpJQDOZ4ZfArCQIvyvjfCRnQEhDskiMKyFjf8fAoGCLwPgnGlJSDjfdgPi7GgHF8cfsrwdviPj49dIQnI3C4efl9lGwRN2Jx4REUBI6wb6AvCYxPClKAJM78M8vdQBMHdieVx+2gHF/CATNMKgLqjp2QRGOA78TWXxfjFw9Z+ygGrdA+ysG0DcaQUQbgQDv5isnZF+OfM3+6gJG3cJumvKcAzpb+WWOPKlLQBBAPPD10A75QNxwnuo0uXSbqj7Kc5yHKALqcVSkHiPXQBlwDOgD43GkFsROJzIwwrMDE47uaonjQD23JkxdRBwb6U2RsmMBMeFL2AZz5ZUA7rxxr3X34GkJTdf4b4FOs6heBzPOgA6qIk3YcqeWxurJE1kCgMJjKkKbIk8Z+310XWAHG4+RpjapANAClAi7dRJAyispTFVl0g6bba0g23alO/Jk2UuhttS09c+VqShKyggxCbpMAxNAWO62STyHtuom0jHGT518vWfTdrRGzarQn6rzgHkqtgxrxpJu9Nsduv7ZCwY37YM0B9KJAGEUDiJI76U27KELNyikGOYkjlXBa1dIWyotWWCRcp0iQDmEDA/WN3A41ZVTOyWIopuvhVHMmWA0gZ44RupkCeNUGrT9qLgcW84sggwpatkxkUpIEcBFbqy69PJvjZImAkqKFG6ApLijsj0r0FJvGOFbJcOsXR5McOJ1vqsFwvJkd49dLbRffjiOPGtZqxrA3a2g4jsnBaCb0q3cQcQc+cgbZ1YA2iQALyTdAGJ8Kwyi4vlfU9CM1KPMugWwm64cK85eCOFVhrR0hrUS3ZISnAuESpX1QbgOJv5VyTWsFpDgcU6twiey4tak3jdtCttfD7JRy9jDZxGuEuVbl7Bu8SbjHllTlITmBVQ2LX51F5TOEo2lFCr+0fnCpTaoiNkxOIqz9DaVbtLKXmjKVYg4pIxSdxHxdWe7T2VbyWxfRqq7dovc2IqMW4xN14PCajaT0o1Zm1OOKhCcN5OSRvO77KqzTuv1qfJDR6lvIJ9MjeVZH6sd9KNNO74egv1ddPxdexceyMIokxlVDaO1ltDRJ2usJi91ThIjcUrBGPkK6fQfSHsLSl0KLaidqTtFu/slJ9JaYxCpOYJwq+zh9sem5RXxGuXXYstbZkkbwfVTG0CLr+POvWd4KSFAggiQRgRvHCl2p9DSFLWoJQkEqJwAzrDjyN+fMckAYRSnW5PdH2VVGsfSA86opsxLTeG19NQ3/m91/HKubsumn0L6wq6wxHzsuC/OFHHjXoQ4dZKOW8Hnz4lXGWEsl+NIGOJznfRpAyiaqDR2vzzagopkSNpAUdgpgyU7e0pC8MFbMT2c6tHR+kW32kPIVKVCU7+KSN4gg8qzXaedPxdDRRqa7vh6kxxMxz9n8qBpsZ4i6OF/vqPpDSjbLanXVbKEiSeOEDeTdA41VWsOvtpfUQySw3gNk9sjeVDDknDeaUaedz8PQajVQpXi69i4oEznWHkyI5euqDsOnXm1Fchwn8bK+8SbjxFdJojpBcbWNtKlIJ7adoqCRAvbK5WDO0dlSiMANmtE+H2R6bmeviVcvi2LUCL7zxHHKm7CdwpVltCHUJcQQpKgFJUMwcDUPT2mWrK0XHTdgEjFSjgkDfWFRbfKlub3NJczexslCRUdLeE4ED3x41Tmmtd7W+YSssoyS2YMcViFE+A4Vr9HawPMyew4SZl0FR7lSFJ7iK9BcNs5ctrJ5z4nVzYSeO5fRQmMLqMVVegOkIoWlLwUWlekSraLZJuKSe0pAESFFSsTJwqy0PA+iZBEgjD7RWO2mdTxI2U6iFqzFnlNxflJnhOfhT0IAwrKTIryUxVReIDkgX45DGshHZuxMX540SWAOdYW2dkJFAKgAYzjHKAJokKMYwBuxx41B06pbVmfcbgrQytSbp7SEEpuzkgVRWlNOtmzNFu0WtdtWoqfcU86lKBf82lIUEm8pggYA4TAAv8AffbbQtxxSUJSL1LUAAIzJwr596QtYE222FxuS2hIbQSIKgCSVQbxJUY4AYG6uftVrccjrHFuRhtrUqP1iaVQHqkaNsvWvNNfjHEI/XWE+2o9dF0dsbek7In/ALm1+zQpz/TQFsdJOliwwGkKhb0puxS2PSjdMgcid1Vho6wuPuJaaTtLVgPWScgN9b7pItRXblpP3tKU+Kds+ao7q6Hok0akpefIk7QbHAAbSvHaR+rXt1NabTc/m/7PCtT1Gq5H0X9CWOjElHatIDn5qJQDGElQJ5wOVcRpfRrlndUy6IUndgQcFA5g/F9fQSWgMPjD3VV/S4188wq7aKFA/VChs+tXnVOj1dkreWTzku1ujrhXzQWMGr6N7eWralM9l1KkkZSAVJPkR+ka6LpT00UpTZUKMrG05F3Znsp7yCT9Ub65DUdvat9nH5xPghRPkKXrjausttoVkHCgcm+x/pnvrTOlS1Sl2WfqZYXyjpWu7wRtDaIdtLgbaEnEk3JSN5O7zrsXejQhHZtILl+KIRIExIUT3weVbbot0bs2UuwJdWTP5qJSB47R767TqTvu9cn7KyanXWKxxg8JGvS6GuVSlNZbPnu12VbS1NrGytJgjj7s5rsuiq2qDzjEwlaNvkpN3mFX/VFROlFlKbb2c2kE85UPUBUPUZ0ofcd/F2d1Z/RA9sVtsfttNl+aMVa9jqcJ9GP6QNMl+0ltJ+bZJSncVT21eN3Icaiat6rPWyVJIQ2DBWoTfuSPpHwHGtEpRMk3nEnfvq+9XtFpYs7TYF6UieKjeo96pqvUW+61RjDr+blmnq96ulOfQr3TPRy420XGXetKQSUFOyogYlMEyeHnlXCgV9HKSQmBXz5pdsJtDyU4B1YEbgsgVzQamduVPfB3iGmhViUNslpdGOkVOWPYUr+qWUjM7JhSfCSO4Vz/AEoaaKnE2VJOykBTl+KlCUpPAAzzUN1bLojZll9Rw6wAcwmT6xVe6btZdtDzh+k4ojlPZHcIHdUKaU9VN9vuyd10lpIrv9kSdXtAu2tzYbgARtrVgmcMMSb4HDLGuutHRoNj5u0EuAT20gJVwuMpv510PR3o3q7E2qBtOEuHjJhP+UJrpk2YZmaov11isag8JF+n0Ffs05rLZ87vtKQpSFAhSSQoHIi4irB6JraZeZJuADg4TKV+tFc90hISLe+E/mTzLaSa2HRcmH33D6KGDP6yT/pNbtS/aabmfmkzDp17PU4Xk2gOknTJdtHUJPzbMDmuO0Ty9H9bfWq1Z1ZetijsEIbBhThEgGJgD6Sovi7neJ1D75WpS1ekpRUrmoyfM1eGpmjwzY2ALiUBavrODaM8pjuqu+futKjHr+bk6K/er5Sn0/NjjtK9GhS2Sw6VLAnZWANveAQeyed3EY1XpEXG47jX0WtskyY4VROtaEpttoCcOtV4zf5zXNBqZzbjPcnxDTQrSlBYO66KreVsOMkk9WsFIyCXMv1go/pVyOvGmTabUqD800ShsZXHtK/SImdwTWz1AfLVnt7wuKG0bJ/OAWR5x41xQGQxqymmPt5z/b6rcqtuk9PCH51Oj1X1RdtY256toGNsiSojEJGcb8Od9bbWDo+LTRdYcLmyCVIUntQMSkjE8I91WRozRoZZbaSRCEgYY3Xnvv8AGpgYAwrBPX28+Y9Ox6EOH1+zxJb9z5zq3ujm29bY0g3loqb/AEZCk+SgnuqprakBxYT6IWoDkFGPKrO6JmSbK6cJe/dQn3+VbuIJOnPqjBw5uN+PRnbJc7OOF12JpjKRec5InvrCbOO+jQI8T5ma8I+gFded0ZY8Jo2VkzhFISRE44kbsvjuprTlxm4CIoDU6328N2G1LwIYcjmUkJHjFfM4r6G6QtFvWjR7rbCCpZ6s7OBKULSpQE4nszxwqiv/AODbJj5JaZ3dQ7/40Br69W9b1Ot5bW6bMtDaEKWpTkIhKBtEwshRu3CtDQGa7jobY2tJAx6DS1cpKUepZrh6s/oKZ+etLkYJbTP1iskf5BQETpCaKdIP8SgjkW0+2fCus6J7cnqHWsVhzbifoqSlIPik+IqJ0r6KJUi1IEpACHCMr5QfMj9XfXH6FtK2Nu0IUUqSNhBGa144iCAmVc9jeK9xJX6VJddvmjwW3p9U5Nbb/Jl7KfPDGPjhVL696YTabUVIIKG0hCSMFQSVKHAkmN4ApGkNa7W831bjkpIgwkJ2gcQdmAa1FmYW4tKEJKlqMJSMSa5pNH7Fuc3uNXrFelCC2Ox6LLETaVPESGkED6y7h/lC65zWJoptVoB/HOHuKyR5EVburOg/klmS2Y2zJcIzWoX9wEJHKuE6UNEFu0fKAOw7AJ3OJEEd6QD3KqNGpU9TLs1hfwTv0rhpo908v+TrejK2pVYUoB7Ta1JUMxtrKgeUK8jurqHrYhKSpRAABJJMAACSSchVH6I0g7ZW1OtrKFuEIRgeyg7S1QQQYOwkT+EvcaHSustptCAh1yU3SAAASMCQLqrnw+U7XJPZsnXxCMK1FrdIHWnSnyq1OvCdkmET+CkQnlMTHGuh1I0UVWW3PRiytpHE7JUofuVyejrA4+4lpsSpRu3AZk7gN9XloXRyLPZksJwSCL8VE3qMcSTV2ttjVWq4+nyRToqZWzdkvX5soI19BaN0iHWkOpjZWkEX7xhwjA8qpHWTRSrLaFtEHZBlBObZPZPhceINTbPp20WRDbTTmzErWkpSoBS4hPaF0JCTdmpWdd1VPvEYuDI6S/3aUlNFs6e02mzMuOrI7IISM1q+ikb+O4X5VRC1EkkmSbyd5OJqZpbSz1pUFPLKiLgMhOMDKa2OqGryrY8BHzSCC4rAR+ADvPkJNS09K0sHKbGoulq7FGC2LH6PbIWbEiRBclxX6UBP+UJqoLa1sOLQcUrUnwJFfQDaALouECBlfdVRdIeiS1aVOgfNvHaByC/pp5z2v0uFZdDdm6Wf1GrX0ctMcfpLB1B0ihdhag3oGwobinDxEHvrcW7SbbSFOLICEiST3+JMXDOqVsOkXrK0FNLKHHVBVwB+bRIBggjtKKv2fGkaW05aLTAdWVAGQMp3xvvrsuHudjkn4ckY8RUKlFrxYE6Yt5ffceNxWomNw+iO4QO6rA6NdGEWS0OEXvgpT9VIKZ/WUofo1wmgtDuWp5LTYx9JUXITN6j7BmavGx2VDSENNg7CEhIAvwnE78yas19qhBVR/EiGgplObsl+Nnz6KvXVnSYdsjK0x6CUngpIhQjmD5VVOuuh1Wa1LEQhwlbe6FGSn9EmOUb6GyaXfsjaEsuFClEuLEAiFABsEGb9kbXJaas1FS1NcXFlWmtemskprYuTTOlUWZkuum4DAfSVFyRxJuqgrS+pxa3FektRUrmoyfM1L0tpl+0kF5ZVGAyE4xUrVfQS7W8EiQ2mC4v8FO76xwHjlXdNQtNFymzmoveqmowR1+gdGlGh7RI7TqFucdlI7I79mf0qrhC4IIyM+FfQYZQlOxsjZgJ2eASBsjhFUVp3RarM+tlU3GUk/SQfRV4eYIyqvRX88pp+byW6+hwjBrolgveyaRbcbS4gylQBHIia1mtWnxZbOtwwFkFLaZvK8B3DE8qq1OnbRZAhhpwp2B84mAR1iiVKF+GyClJiL0qrU6S0i6+vbdWVKiBOQmYHjVNfD255b8JbZxJKGEtyJFXfqTYxZ7E0hVyiNtQzlfajmAQO6q11I1dNqd21j5hsyonBaheGxvm6eHMVcoRM3Y5m7wrvEbk8Vr+RwyhrNj/gLr+HnvryFqJOEClI43+qQmnWdc5QPbONeUeuYLIEHLP30+s0CVDIigMpVNKU1ieM0IcEyMDjxgY01lUpB4UBz3SA8E6LtZFwLKk/r9j21831fHTJawjRqkTe662nwV1h8m6oegPVdPQXZ4sr7kek/s9yG0n1qNUtV+9EDQToxom4rW6rifnFJHkkUB2FoZQtJQtIUlQIIIkEHEVwWnejorUPk7qUNpHZaUFQkn0jtSSSTfJE4CYAA6fTWsTFnB21ejeSIhPMkxwjG+uSc6YrGFEBi0KG8BsA8tpYPiKlVqJVy8DIXaaNkVzoiWXoweJhx9tP1UqV69mu01c1Vs9kvQCpw3FxcFXIRckcsc5rlPuyWP8AJrT4NfxK8emOxm42a0+DX8SrLdXbYsSexTVpKq3mK3LIcTI7x66hW7RzbqFNOoC0KyM/AIi4i+6tFovXyyvtlaCs7NykkAKBJukTzvwuMGtbpfpSsrDpaWxaFEAGUhuO0JGLgOdUc/K13NPLzRb8uhE030cOLWVMvICBchCwodWkYJBEyLyZiSSSZJJpFk6LnSfnbQhI/MSVE96ojwNPPTJY/wAmtPgz/FoE9MVkF3ye1Rlc1hu/rK1LX2pYz9DG9BS5Za+p2WgdXrPY0w0nGNpajKiRhJ3cBdW6qt0dMViJgsWkDM7LR9TldNZ9cbK40l1sqWlRi4CQYkzJuI3G++s0puTcpGqEEsRiv2J2mtBs2pKesQCpMltWaSRjxGB2TIMXiq/tnRpadoqD7a5JJUrbCjJvJACr88an2/pXsrLjjRYtBKSQSA3E7xK5il/dlsn5NafBr+JVtOrsrXgexVdpK7H41uZ0b0YiQX35H4LYif0jl3VCtGnDaVJ0foxtTLe12nASDspPaVdeE4EkmVSBnfLHTJY/ye0+DX8SgsXSro9KzFmea2zK1Btq8/hK2Fkk9xqvUX23YUpPBq0EaNLmShl+WX0fdrzLGQzdvIi84mAMeN1Jt+j2n2urdQFIP0TvHEXg8RUex6fs7jQdDg2Ymd4wujHkL65/TfSTY7MrZUHVr/BQEzwJlQA5EzwqPNytdyPJzxbxlGs0r0brccUpu0Jgm5K0EbKcEpGyYgAACALhFYsfRdf89aLtzaL/ANZRu8KFfTFZMRZ7TPJrw/rKIdMtk/J7T4NfxK0+/W4xn6GP3GnOeX6ncaE0QzZkbDKAgTfmVHeSbzWy2r4qtPuyWP8AJrT4NfxK2OkOkqzNstPKZfIc2SkAN7SdpG0JlcYXY1mc23lmpRUVhHVaW0QzaEhDyAsAyJyO8e7POuAtvRo8pxRFpSokkytJBM8iQT4U0dMlk/J7T4Nfxa8emSx/k9p8Gv4tXVamyr4WU26auz4kHYei8AgvWgkfgtpj/Mon1V3OjtFtMNhtpAQkZDM7yTeTxNcEemOxm42a1eDX8Wt7q7r5ZLWdlClpUMUrACgN9xIN+Ynurlmost2kxXRVVvFYOpS2AfV7q1+mtCtWgArSNtE9W5HabJHpDfBgwZEgHKk6Y1ks9nBLipCRKoiBzJMTwF9ck90w2IEgMWlQ3hLYB8XAfEVUp8r26l86vD4lsyM90XPT2bShQ3qSoH1n11N0d0ZNoIU+8pwZpQNgd5kkjlFRk9MVkFws9pjK5rw/rKP7slk/JrT4NfxK1PX3NYz9DGtDSnnl+pYdksqGkBDaQlCRASkQBTwa4bQHSZZrU71SGX0kJKpUG4gECLlkzfXXNvgjaAMKE/bWbd7mpNZ5UNLWcZm7gf505ERdhXkGQDWAoZRQkRkrBgYnccBfTAmUDdj3TNNDY3UK25AAMCgI8iLpwJ5CAK8FgSCTdlgMb8Kd8nG8/wAsKINCIigKl6crX2bKzvU44RuKUpSn95dVTXe9NT86QSgYIYRd+cpa1HyKfCuCoD1fRmojXV6Ns0CD8nQvvUCv2184rwMY19TsWUNWcIH0Wgn9VECh1dSj+kF5WwymT2lLUriRswT+sfGug1H1NsTzTSn2ysrb2yStYvMQOyQIv51zXSCmBZ/8T/RVk9GaB1DH9wn2VDTxTg8+v3LOJSavwu6+xIb6OtFk/wBlu/vXt31+NabWbUXR7ISUMRtEgjrHTdGN6scaskIGPx8XVzOuTfZbM4qPqqNkcRZPSpStSfT/AIUloMdVby2knZC3WzP0kp2onvSk8xR60JCrcAbweqB4gpSDWLCP+Zq/v3vWui1mH9PT/g+pNST2TKJ7SaLR0X0f6NWkldn+lA+ce3D8/nUpXRzovKzb/vr18fp1wVs1G0m+8640RsFxRHzxFxMi7K4il/c40xvH7c1yTy+3zIV7RW+Tca16n2FrbDTRQA0V7W24dhQCj9JRGQuO+uU1EdMvJnswlUZbQJAPOCfCl6X1Qt7IV1onZG0QHNo7I+kBN+B43VM1EeR1bqNmF7SVFX4SIIA4bJn9fhXauvXJfc8qK5cevf1IDtmS5pQtrEpU/CheJB5X1aWi9QtGLaSpVmlRJ++Pb4GC6rNv/wBXH/uKvnQSR1Kbsz+9UoRTrTKLG/btGgT0b6LKZ+TDP769v+vXCa56q2RlL/UtlJbAUk7SzdAMHaJBF/OrpU3dAuqsukNMC18Gx+6mqrVhJrubNLFS5sryZyWoD6i2tBJKUuJIG4qB2v3R4mtRqhYE2y1kPyoFK3FAEjaVIuJF8Sqbt1bPo9wd+u36lVzWgtHPPr2GTC9kq9LZuETf3irfP87mOXwNZwXdZejzRZQkmzSSBPzjovIE/Two09Hei5vs13949/51XbfR3pcgEEQRI+fOdF9zjTG8ftzVb6/6SXQsRHRzos/9L/8Aa9v+vzqtte2EoYaQkQEr2QL7gEEAX34U37nOmN4/bmomt7CkWSzpXepJSlV89pLUG/O8G+o/qW5fB+CS5c9N+xvtQNU7FaGGVvs7RUF7R23B6LigPRUBgBlXYJ6ONFk/2a6fxr24/n8qrTR+rdstdmsvyYi5Lk/ObH35VSPucaY3j9uanJ59PmZoee+dzsdY9QtHNICm2IJUBHWPG6DOK+VVkygWfSSUskwl5KRfNyoCk8blKFbK36iaUbAU5EG6eum/dWs1WSGLe2h9HaCtiCfRWq5KrrjeR+tOVRgvF1/O5fY//L4e+/f0Nlr68rYYTJ2SpwniU7IT+8rxrp9R9S7C8w0t5suFbYUTtrHaJHZGyoAAXjuvra6Z1JFsYAbUE3ymcULFx+sk7rst1ceOi3SiDCFNROKXlDvjZxqxvDaa82QsXOouMsrC/wALBV0d6Lys3f1j18CcNusjo80Vd/Rufzr3/nVffc30x+Gn/wCQr3VBt+qWlGD2lnaAkBL6pI4YX41W2l1f3Oxi5PEVktzR2pGj2D1jbGwrZgnbdNxgkXqOYFbtIAASnIAcgSIHGqm6ONb33Cph1xS9lO0kqMlSQQlSTxG0IOOMzVvJQFAGTBg+6r+XESmMk5NeYsOCMychlUljDvPrryWwBhRJTAgXVwmRutVdfnFw4X0xgk3k3Ze+kpXA7jzypyCRJI3YUAItHDKbvjlQF5WPxjHso0NGMALo3nCKBu498X9+FAfPnSY+V6TtJOSkJHJLSB65PfXM19I2/VWx2lYdtFmQtUeleFKiInZI2u+aFGpOj/yGzjiWwT8d9AfP2gWOstVnRjtPNg8isT5TX0wF9ZICroIVEXHMc/fWgc1QsjRLtnszSX0JUWiQdkLIISSAYqXqnopyzs7LigtxS1LcUMC4snajCRgKjl9MFkYLkc298rCKv6Q9Du7KeySpkq2gM0LjtjeBsjuPCourPSOuytoR8nS5sI2J6zZlOV2yb7qvF2zJWe0gKGW0Bd3VqrTqtYVLBXZLOonEllvzuqMYuCwuh2+atlztblfnpmX+Rj9v/tVr9L9KanwkGyBOzf8A10yf2Yqy/wDhOwHCw2XAfeW/dTVapWCbrDZv2LYGX5tHHKw/uRhNwlzR6lH6r2Zx60qtJTCUqWpRi4rXPYG8yqeAHEVjWUf09PNn1Jq/l6OaSgJ6tsJw2UoSBwERvqG9q9Y1rCzZLOpc+kWkE9mIMkTdlUmntgjs089Rur0htX956wmtibRdcO/LCsNtBKQEojAmABf76JTZ2cgBkPeanJ5eSuuPLFROI13UesVP4hX+uqw1D9N36g/eFX0/Y2ljtNoUYA7SQSQSeyZy+2o9l1csjYOxZGEKVd2GkC7LAYVXGLjNv9jTdYpwjFeSwUJpG29TpFbuztbD21szExlMGPCuxsXS8ptASLIDE/ft5n8XVkO6qWJZKl2OzFRMklpClE8SRUcaqaPj+xWXA4st5D6tFzKKiVSScuY4VPTMuf7GD/j/AO1XM6ya9qtSXfmA2XAAT1m0ABAuGyL4GNXKjVKwXk2GzcIYb4/m0dm1XsaCFIsdmQoZhpE90C6uOGeq+pKNkoZ5X12Kr1J0O62wp1SFAKUFEQZCE3JUd0knuANc1YbQ5o21ElG1AUkAmAtBiFJMHcDgcxX0U2gJuAGIyEY8Pi+ojmiGHf62ztLTf6TaVSbr4I86k85TRFKLg4y6las9MakpCfkQMAD+vIwEfi6M9M6/yID/AB/9qu+GqFgP/Q2Uc2W/UBQL1S0eD/Y7NhP9Q3GB/NrmH+M4sI4I9Mq/yMft/wDarn9dLV1llYXGztqSuJmNpuYmBONW6NUrATdYbLEj7y3w4VJe1csigEGyMFCYCQptGymBAgRuurnJvn+yaslFOKez6nIdFayLMxH4Ln/6qrvy4TcCcYqMxoxlkJS2222kYBCEpAkybgMMTUjaUbgMj3Xnzq1vOCmEOXPqzVa4mGE59seo1SGklf8ANQf++z/or6FtbCXAEqQFjcoCMONa20atWMq61Vls5XIO11SNqREHaImRAv4VU4vn5l2NMrE6lX65OK0j0hqsSG0hjrNvbM9Zsxs7P5hn0vKoI6Z1Af2IHm//ALVWHatAWRzZ27LZ1wSE7TSDEgE4i6YHgKX/AMI2CB/QbNP9y3v3xUpZbbf3KUlFJI4I9NCvyIft/wDarSaZ6SnHjtfJ0oUEwn5zaA4kbInxFWwrU+wQf6FZRH/Zb9ezQN6r2AQU2OzSIIPUtzO19XdUXDOzX1Jwm4PMWVZ0WaEdLin9khJQUIn6UkFSvqjZAnC/hV2tubKQmJgAeQrDTISkgIAnJIAypiUHgJ7zVudsFMYYk5MWXlY8ou3/AGUxqSSZMYUpBjz8gcPDyp1n2sThF3jXCZlTcQQLx5/bTQaErAEk0PWiJvjfQBIVPMY0Km58Z+OFK62TI494AmmtK7ImgCQqR7K8FXx8RQhwHCbs6W47OGUX8zFANWgGfjCvIOWY+JoWFyDO+sh0EwL+VAEVXxvwrykz8b6S46DcOPdHtomVEkzuFAE3dd4Hf9tEpUcqEujDE8KFx0YZ4eP86AYoT5eRoANk8D5fZS2lGU9/x5U5ToGd+6gCUYrBgjnQLdA5xhSgsjxHsJoBxRBnx99MmhU4BiaFToAkyKANCpE0tTeYxHnfMUpThvO8e2B30/rBEk0ASTNYSZ5ih60RN8b6UXZII/ndJoBq2wZ8fKKJB7uFCyvsya8hwHCTxoAwq+KEoB8IpLj04ZRfzMe2jZXMzv8AZQBN3XbvPjREwefroetEwL+VA46DcO/un3UA0omOHuigQNkxlkfZQMLJN+4fHO+mqcGGJ3CgMrMcs6yoSKW48Bdnu50ttZkDKT5UAyNkzkfL7KaTQrcAxNCt0DHwoAwQRwpRREEDDH386X1h8x531IU4BiaAKawhU0BdETfFJLhkkbj5GPGgGlrdjJPjlTEqmhS4NkEnKvIcBwmgI7a8IF+Z4TTARsAnn5zUilrbBEeqgIxVcYEXT4wBFYC4m6YNxxqV1Kd1FsjCgFIwVPf4AGlpVeIGJx5Z86kKQCI31jqU7qAiIVGU3c6kMkyZ3e001CQMBFZigIpUBMCYunfPsoSe1vvN3x31ISwkZUSUAYCgENKkjLGBwj7ay6QCbpzPCI+ypEUHUigIq1Z8BcO8/HOjCr8IEi7vH209LYGVGRQCH4kXSTdHtpS1SN2PlA9fqqSpoEzXg0ndQEcOXXCLrzvuNNdICQTfGW+6nEUK2gcaAjE5REEc7zJrDasIF8xPlUnqU7qOKASmNi/DHzmlFV1yYuJ8ouqQtsER6q91Kd1ARkqibp3HHOnNYGe/9UTTdkYVhSAQRvoCOlWEDOJ5Z86BChOE3VKDKd1ZQgDARQCmCZv3e2PZQLUATAmPWcuWNSopaWEigI6jfvvwHIfHdRtqkjITcOQP2U9LYGAoooBD0ThJx5RSVKzwumBzP21K6kTNeS2BlQCNrcIHtkUx8i66TgB3i+nEUCmgTJoCKTIwjEcbhn5CiQ5hAjed/wARUjqU7hRkUAhZASCco77qWTlEYeZ9VSVtg41jqU7qAioXdcL8juuqUzh3n10YFe2aA//Z"}
                alt="Users"
                width="100"
                height="100"
              />
            </Container>


          </Container>


          <div
            className="d-flex flex-column justify-content-between mt-4 mb-auto"
            style={{
              height: "360px",
              width: "200px",
            }}
          >


            <div>
              <span
                style={{ color: "Green", fontSize: "20px", fontWeight: "600" }}
              >
               Users Across World
              </span>
              <br />
              Registered with Us
            </div>



            <div>
              <span
                style={{ color: "Green", fontSize: "20px", fontWeight: "600" }}
              >
                High quality Ratings
              </span>
              <br />
              Fresh Vegetables from farm
            </div>



            <div>
              <span
                style={{ color: "Green", fontSize: "20px", fontWeight: "600" }}
              >
                Millions of orders
              </span>
              <br />
              Across Globe
            </div>
          </div>
        </div>



        <div className="mr-5">
          <img
            src={process.env.PUBLIC_URL + "https://townsquare.media/site/959/files/2020/12/GettyImages-1220799738.jpg?w=980&q=75"}
            alt="Users"
            width="500"
            height="400"
          />
        </div>
      </Container>



      <hr
        style={{
          height: "2px",
          width: "1150px",
          borderWidth: "0",
          color: "gray",
          backgroundColor: "gray",
          margin: "50px auto",
        }}
      />

      
      <Container className="d-flex flex-column justify-content-start ml-5">
        <Container className="d-flex flex-row">
          <h4 style={{ marginLeft: "80px" }}>
           {" "}
          </h4>

        </Container>
        <Container className="d-flex flex-row justify-content-around mt-4 mr-5 flex-wrap">
          <figure>
          <Link style={navLinkStyle} href="#6" to="/#">
            {/* <img
              src={process.env.PUBLIC_URL + "/home/Vegetables1.jpg"}
              alt=""
              width="120px"
              height="140px"
            /> */}
                  
            <figcaption
              style={{ fontSize: "50x", fontWeight: "bold" ,color:"black"}}
              className="ml-3 mt-3"
            > 
              
              {/* <form>
              
                <label>
                <input type="radio"  value="Very bad" name="radio" ></input>
                <label for="Very bad">Very bad</label><br></br>

                <input type="radio"  value="Somewhat bad"  name="radio"></input>
                <label for="Somewhat bad">Somewhat bad</label><br></br>

                <input type="radio" value="Neither bad nor good"  name="radio"></input>
                <label for="Neither bad nor good">Neither bad nor good</label><br></br>

                <input type="radio"  value="Somewhat good"  name="radio"></input>
                <label for="Somewhat good">Somewhat good</label><br></br>

                <input type="radio" value="Very good"  name="radio"></input>
                <label for="Very good">Very good</label><br></br>
                
                
                
               
                <br></br>
                  <input type="text" name="name" height="100" width="100" />
                </label>
                <input type="submit" value="Send"  />
              </form> */}
              
            </figcaption>
            </Link>
          </figure>


          {/* <figure>
          <Link style={navLinkStyle} href="#6" to="/#">
            <img
              src={process.env.PUBLIC_URL + "/home/sub.jpg"}
              alt=""
              width="120px"
              height="140px"
            />
            <figcaption
              style={{ fontSize: "20x", fontWeight: "bold" ,color:"black"}}
              className="ml-4 mt-3"
            >
              Cart
            </figcaption>
            </Link>
          </figure> */}


          {/* <figure>
            <Link style={navLinkStyle} href="#6" to="/#">
            <img
              src={process.env.PUBLIC_URL + "/home/order.png"}
              alt=""
              width="120px"
              height="140px"
            /> 
            <figcaption
              style={{ fontSize: "20x", fontWeight: "bold" ,color:"black"}}
              className="ml-2 mt-3"
            > 
              Order
            </figcaption>
            </Link>
          </figure> */}

{/* 
          <figure>
          <Link style={navLinkStyle} href="#6" to="/#">
            <img
              src={process.env.PUBLIC_URL + "/home/co.png"}
              alt=""
              width="120px"
              height="140px"
            />
            <figcaption
              style={{ fontSize: "20x", fontWeight: "bold",color:"black" }}
              className="mt-3"
            >
              Payment
            </figcaption>
            </Link>
          </figure> */}


          <figure>
          <Link style={navLinkStyle} href="#6" to="/#">
            {/* <img
              src={process.env.PUBLIC_URL + "/home/fee.png"}
              alt=""
              width="120px"
              height="140px"
            /> */}

            <figcaption
              style={{ fontSize: "20x", fontWeight: "bold" ,color:"black" }}
              className="mt-3"
            >
              
            </figcaption>
            </Link>
          </figure>
          
        </Container>
      </Container>


       <hr
        style={{
          height: "2px",
          width: "1150px",
          borderWidth: "0",
          color: "gray",
          backgroundColor: "gray",
          margin: "50px auto",
        }}
      /> 
    
    </>
  );
}

import React from 'react'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'
import Image from '../../atoms/Image'

import ProductCard, { InfoWrapper, ImageWrapper, ActionWrapper } from './ProductCardPreview.style'
import { useFormats } from '../../../utils/useFormats'
import { ButtonEnum } from '../../../models/Enums/Button'

type ProductCardPreviewComponentInterface = {
  imgUrl: string
  title: string
  price: number
  inputQuantity: JSX.Element
  buttonText: string
}

const ProductCardPreviewComponent: React.FC<ProductCardPreviewComponentInterface> = ({
  imgUrl,
  title,
  price,
  inputQuantity,
  buttonText,
}) => {
  const { formatCurrency } = useFormats()

  const imgOnError = (e) => {
    e.target.src =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAABKVBMVEXpVnL///88XGtvhZLd8fWn3uqr3+rtTGep4+q8wtLoTGrnSGb98/bwgZT2vsfq7/BkfIkyVWWOn6ODk5wjTFyXpa5pgI6ut73pUW8lT13shpeYparvlqbvcYd6i5TnUWrqYHj2z9b0r7rueY7zt8E/XWj75uj1yNH6///ue4++7PTwn6r/+foyUmRigIj41twpQ1MgRlvJ0da8xshUaHUAABVihI/rZn/sjZ7tmqbnYH/tkKTzwcXvuMHwpbPwqK/oO2LqN1zT3N8XSVVCZHKwvsVafI3V39zTgZPFgpOwgpKUgY14f4/2jaH44elZcXwXLTkAFyQAAAQSJDA4T1khOkttkJ0AFSkAABoRKDR/nKyXt8KrztRLU1tbZG5odn3ccIjHrLnOm6vjaLgeAAALsElEQVR4nO2dC3vaRhaGNXgbpyMBUgz2AJYBg0DUXBJjG2gAK8RJ03YXmjSXXuJ2d///j9hzZiQhMBbOblcCe77nsTWXo2FezRWN0CiKlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSU1PaIUiYcjAqxhcgFW89EBPs+5hkvJrAuPnap1VSfZ0YdpLiGA5+3+G1q2AvYsn7KUwm8Zl24R0lxKUZu3EDl1vTE9Q+f83hzKKxd8/ilHhNSxbwUx8TT2CsYdUpIJVBK9Ni3KQFr3vddohHzvTVMkM2Nbby6LOn7RxsBT5M2IcdFcKllcnyIOiZlUW6KOoJ8mgFrwElxm8OBwtk7fXFGE89gpMm9gyZpACstk8vn6O9XyZAiuz3l8WObbEatb5Kxz25SxhhteOw0b3fqy+wnaANSOHtdRbejER7bbDqYgFolh4wnWOHRtE9Sgr3OT3ZqpHczI5FL7dj5Q5+9gUFQNV32EhRn5yb73IfsPBWPnXAvrZKBYG/w8mU+u0hY3Qh2aOwjJ8DOS9NjhywmnZvsWJSip0Z2B7pt1Wl67C+wG3dSXrnfYHd4/CawF5PQKxVvYVdTpKreLHfSBBHNrfM13nN3iMbbe9Pm3jp0EqvZ0XyYKtvNDWjvtl1iDNixHi+x0749VZUV7Fweu6c8Xj0od9Grk5GqrGT3zJ/Hzk6nUKmpCuwOu8HeIxpVVajzvcB4BOwDRwWJ8Rz6+Xy/fwKWwt9sJvv9PPTyu+hdwY7mh4Sw2Ic41oMSsm0sDDvPlthhJOeR8I8Eerflvi6l8m5bTI5gjIN+HvoQtwdc1deB+ZQcxs6u9JoaF2lqDc5eKYLEGMfGIrJpa7V5BeV9XZFL8ft5QKtxWK+fb9olPFA3waI6Z6eik1FjoF0UjMSg3XmdvwzMbRjGqS+gzgcyOp/bHCqCnfcUmltjBDsdiXkb9SZLh6OFMQ7Gj3zs7V2oeGjzOS2dz2kv/azBpNYMm9Py2s0GdodPYoko95JNloz5mAfmZW7WF3PeDRBrDEVzpYMR13Awp4WvI70AezGfGrlCrzl0W241JQ78IuJJScYTrFaFcV8V5oMi/8TqsPR/x7qbmFp0He5XzGIwcs13WBHsHudetmjtedmCuZSUlJSUlJSUlJSU1H8r8TU9Yi18W4pNarJe0yJXObkBN25YB28spKMVfmQnbnSF1QB8z8jkhAx9pa68+JXKXO2vPu1W7RcAv8birfd0SMhpzkj4svZ3VmlmJcI0W3lSiPb1U+Ley41PhEwyQQrLWp3ZWSi79cXwO/qE3/CLT+yQkKtljmhKfueIkJM479XSETnlxW5kAlrdRK8yoUp8SXN3Cz7W5w9oimSxsRtP+AKM7a7C3CI7TLefdlMHCL9/wG/Zx8m+Zwn2KCXYs/GzG5Jdskt2yS7ZJbtkl+z3iP0Bz+uylvVw2XWAf6jsOzuW9VDZIR8PlX1Ph3w8VHYD4PWHym7peA/lQbK3Epa+jv0L7kdtF7tlWXoYe7ow8ZyTV+kww4O5YSHMcGPYcU7bKtye0eYz42VXOE/1ff32KmDnfMPuS+NZSF3ZLPaQvu67TCKR6Qp06BVvL8/JS8s17OIp320Je+gYp4MFFmgX0NvZEMN9Q1yl7ku4mvshhtvDTvQWMJ1CYe7vh6FzeCvTxVJv6WF2W8TOS97Av71QM1Hy3DAUfavYOTxYhdXjBcNw9O1iJ7gSaa0hEvBoOFtjtFXs3Rwi5bpr0e9muE3s2HthM14L380Jw0y44Raxc/Sjo9ZaeERvHR2thd8edkC3cLjW1zHxa6TjmGiFG24NexpnKm104Tj/8vZ5HTfk/WE73HB72CfPErm2cOq5xLMQ9it/cIMqkrkP7CSb8ac0R5mQLz3k1dXR3DBsBrg97H+9JLtkl+ySXbJLdsm+oezpSffgyV52D5XNHrw6naSbD4A93c3OLPGzgcwMnw1GtduvL3ay3ckd1jEKV1vK/l1hlmsZhpHLWbMnB1Datm2XK8lkPv/m+x9+/Lt+sfdqsiaJQu5sC9nThSv8lYWRsfa6wS8rSVeNZP7NDz++1rOh+AUjcbZt7JOjjGFZRuassIxWbSR9Nf5hTwqzsJt7wG7NdraJfdJG8lZrRZnaUzMZgMeQsHZfwM882x729BH+wCJnvVod3VhiDxVnN/a2hb2bw9p+Gzkhz4Pwd2M/2hL2vZxlWbns7SvxxwH2/n1iT8/wBvUsbEn9eN7gG5f3iD1t4R3a8GXIIfXZK+X7w55O4PLqaThOmZZ89rVT2+1hf4KTmXVTtTJlilvlq+vQt4j9INMywpq6YFcVpXS3Xn6b2Elhby066eC7/rDkG7V7xX4XiTe0KmZfu4PxPWO3846q0kr9To/i3TN2Qmqd2l3vXdw79i+QZJfskl2yS/YI2VtRs9sbwl4V7Ivv+lir3EzXZ+Emt74kiEcmNoF9RA4CL/YJl2WJ/yj8gZF121tfhMnqN7vMfAMjG+97TlifTHKYm9bTp08NK2EYcHzvB7hH3ircCOM9HN8D/P7Z2dyyFTii4z2/PmdnZ/y1NzNw4CoUBuizhJHgaeUm/PXcsWBzUULaRuv1x3bbOj//yfp40W7/9O5t5gID3p1/uILj7OdzCICI9+8+iYBPv/zcuvh4cfH+/NPTGQb8cv5rAo7tD+dvn77+qLfPIK0rMGh/+PST/hs4rLdvr3d+g4Bf334442mdn58Rm/l7tUQpWmpUUGaKpPXfv0F9vv6DH7/ZuRYBv1//KQL+vP7sBhzx46M/3IAn13veqY+44+g66wb8uZzWzmJa2euZPTR5HhqlSN9rxcp/8S+f/jeVI0Sn9bhpl1SOrtOjd/2yGZUi3GxGvcN9pUgV4QYMzIwbdlF2JcK+niknnb9tjMZKtMMcVQ++2gw9+mf0s7vdfz1+FL8efx1xobvwbx599ThWPXr8+c1uDOQgqvz763j1JsbXE9PdeLUh+ypJSUlJSUlJSUlJSUltvhYWRNiK0KUlEy90OW55ZeVGCtxZDJ4cSC+OVRmFVfIod4/rvLv/a4kH5tFpCqe/AXijwbe0beDmv7TB4yCEuWZ9D8D1Q3ruJ/BNYs2k2GQa70hWkjyhCgaZwUxEJvcmtY372uJW3nxRiIrHAnGDXzYW6zZDF0qd8j2M1c5UVdiJu6YzZnTk3mj9VpjRlIgaMH+z8xSF0KbYB7msKmrZfk5x82VNxQVwrnq08Oq0rJRKyhRQAKjJ9y9WGBlgIOaUjm1wgjz7jk1KeICrRFNaEWJYbUjR/AQtXTNa1RhE9RS8QOhieLEgVLDXkZ3YvaKi1mu4z3gTP2Qc8XIssKtKkedAUex881js5cyrgQklDOzFIisG9oSu18DWY8ezHA2fHCjSExLYPnmkOdCCi8jO94VWyzfYOx2N+ez4sU4twhUpwe5Q1eE5GBNHZA7YGd9TjG+KXcEn4T0sqK8KSTlBdpWzI2SAvaqZjUbSDGOfMlJWaYCdJxole6fZAWFrhPJzSgQpsdx7mqZNoYme8JboLxUBu9Mnh85adtttwCHl7iTJ2ImfvYr9MRn3+1p9V7CXUqmpxtt7qQfy7aFeqiNSWsc+0hQ8jYWVu0oviTmMkX1afoEb2OFytOiQYdxFdqa+qAp2Ghx7kR3+aS47NmpnFbuIYjwYXR47d3vsym6n6Za7iglF397F5zHo3IGS2gNkvzQrFXOI7Cc2fyait2jPfyJAh1oPo7T6Kna3CKGf50ZuPw9us1eDEzg7roELdhNUJf1o+/laR7AXYSzCgbuuQSOv+eMt9HX8QXhv6BX2rIHsuP8WFx+a2DjIPmx67BV3fK9SfKDJxg2Z4CpDBcehhfU4e5Vv04Qmkcr0StQ0edZLOINjJhfjfq7Soj3jPQDrYVTFnY+VzECyPd8jjERirpuf4CVkcmuUEvVS5HwuzxaDAxEhc+07TcRXTu1Z8GOZEv10XkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSmqN/gNCzjCkh8HvTgAAAABJRU5ErkJggg=='
  }

  return (
    <ProductCard>
      <ImageWrapper>
        <Image source={imgUrl} onError={(e) => imgOnError(e)} />
      </ImageWrapper>
      <InfoWrapper>
        <div>
          <Typography as="h3"> {title} </Typography>
          <Typography as="p"> {formatCurrency(price)} </Typography>
        </div>
        <div>
          <ActionWrapper>
            {inputQuantity}
            <Button buttonType={ButtonEnum.CircleButton} type="button">
              {buttonText}
            </Button>
          </ActionWrapper>
        </div>
      </InfoWrapper>
    </ProductCard>
  )
}

export default ProductCardPreviewComponent

package com.example.shop.security;


import io.jsonwebtoken.*;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenMachine {

    @Value("${shop.app.secret}")
    private String APP_SECRET;
    @Value("${shop.expire.time}")
    private long EXPIRE_TIME;

    public String generateJwtToken(Authentication auth) {
        JwtAuthDetails userDetails = (JwtAuthDetails) auth.getPrincipal();
        Date expireDate = new Date(new Date().getTime() + EXPIRE_TIME);
        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date()).setExpiration(expireDate)
                .signWith(SignatureAlgorithm.HS256, APP_SECRET).compact();
    }

    boolean isValidToken(String token){
        try {
            Jwts.parser().setSigningKey(APP_SECRET).parseClaimsJws(token);
            return !isTokenExpired(token);
        } catch (SignatureException e) {
            return false;
        } catch (MalformedJwtException e) {
            return false;
        } catch (ExpiredJwtException e) {
            return false;
        } catch (UnsupportedJwtException e) {
            return false;
        } catch (IllegalArgumentException e) {
            return false;
        }
    }

    private boolean isTokenExpired(String token) {
        Date expiration = Jwts.parser().setSigningKey(APP_SECRET).parseClaimsJws(token).getBody().getExpiration();
        return expiration.before(new Date());
    }

    String getUserNameFromJwt(String token) {
        Claims claims = Jwts.parser().setSigningKey(APP_SECRET).parseClaimsJws(token).getBody();
        return claims.getSubject();
    }
}

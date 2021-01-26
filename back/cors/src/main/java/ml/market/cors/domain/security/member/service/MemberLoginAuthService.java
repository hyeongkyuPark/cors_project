package ml.market.cors.domain.security.member.service;

import lombok.RequiredArgsConstructor;
import ml.market.cors.domain.member.entity.MemberDAO;
import ml.market.cors.repository.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
@RequiredArgsConstructor
public class MemberLoginAuthService implements UserDetailsService {
    private final MemberRepository memberRepository;

    private MemberDAO findByEmail(String email) {
        MemberDAO memberDAO = null;
        memberDAO = memberRepository.findByEmail(email);
        if(memberDAO == null){
            return null;
        }
        return memberDAO;
    }

    @Override
    public MemberDAO loadUserByUsername(String email) throws UsernameNotFoundException {
        MemberDAO memberDAO = findByEmail(email);
        if(memberDAO == null){
            throw new UsernameNotFoundException(email);
        }

        return memberDAO;
    }
}
